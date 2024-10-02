import { useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, users } = props
console.log(hiredPeople);
 
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={users} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
