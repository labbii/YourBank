import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Labbii', lastName: 'Zebica', email:'info@hotmail.com'};
  return (
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome to YourBank"
              user={loggedIn?.firstName || 'Guest' }
              subtext="Manage your account and transaction from YourBank platform."
            />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={233782.50}
          />
          </header>

          Recent Transactions
      </div>

      <RightSidebar 
        user = {loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  )
}

export default Home