import { useState } from 'react';
import Table from './Table.tsx';
import Layout from '../Components/Layout.tsx';
import SearchComponent from '../Components/SearchComponent.tsx';

type User = {
  id: number;
  fullName: string;
  username: string;
  password: string;
};

const allUsers: User[] = [
  { id: 1, fullName: "Garry Caber", username: "garrycaber", password: "garrycaber123" },
  { id: 2, fullName: "Ian Car Bulilan", username: "ianbulilan", password: "ianbulilan123" },
  { id: 3, fullName: "Jenny McAurthor", username: "jennymcaurthor", password: "jennymc123" },
  { id: 4, fullName: "Nestle Lacaba", username: "nestlelacaba", password: "nestlelacaba123" },
  { id: 5, fullName: "Mark Rodriguez", username: "markrod", password: "mark123" },
  { id: 6, fullName: "Lara Jean", username: "larajean", password: "lara4567" },
  { id: 7, fullName: "Daniel Cruz", username: "danielcruz", password: "daniel789" },
  { id: 8, fullName: "Sophia Tan", username: "sophiatan", password: "sophia000" },
  { id: 9, fullName: "Henry Miller", username: "henrymiller", password: "henry888" },
  { id: 10, fullName: "Emma Watson", username: "emmawatson", password: "emma321" },
  { id: 11, fullName: "John Doe", username: "johndoe", password: "john1111" },
  { id: 12, fullName: "Alice Cooper", username: "alicecooper", password: "alice222" },
];

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = searchQuery
    ? allUsers.filter(user => 
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allUsers.slice(0, 5);

  return (
    <Layout>
      <div className='w-full h-full p-5'>
        <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <ul className='w-full flex border-b-2 p-4'>
          {Object.keys(allUsers[0]).map((key, index) => (
            <li key={index} className='uppercase text-xl font-bold basis-1/4 text-center text-amber-950'>
              {key}
            </li>
          ))}
        </ul>

        <div className='w-full flex flex-col justify-evenly py-2 px-4 text-lg'>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => <Table key={user.id} data={user} index={index} />)
          ) : (
            <p className="text-center text-amber-900 text-2xl font-bold stroke-3 mt-4">No users found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;