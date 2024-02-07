import Link from "next/link";
import Header from "@/app/components/Header";
import { getData } from "@/utils/api";
import { cookies } from 'next/headers';

export default async function Profile() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token')?.value;
  const data = await getData('v1/users/getuser', access_token);
  let user = null;
  if (data.statusCode == 200) {
    user = data.data;
  } else {
    alert('Error in user data fetching');
  }
  return(
    <>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="mb-4 flex gap-4 items-baseline">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
          <p className="text-gray-800 capitalize">{user.first_name}</p>
        </div>
        <div className="mb-4 flex gap-4 items-baseline">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
          <p className="text-gray-800 capitalize">{user.last_name}</p>
        </div>
        <div className="mb-4 flex gap-4 items-baseline">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="text-gray-800">{user.email}</p>
        </div>
      </div>
    </>
  )
}
