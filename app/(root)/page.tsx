import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const LoggedIn = {firstName:"Shafy"}
  return (
    <div>
        <section className='home'>
            <div className='home-content'>
                <div className='home-header'>
                    <HeaderBox type="greeting" title="Welcome" user={LoggedIn?.firstName || "Guest"} subtext="Access and manage your account and transactions efficiently"/>
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.54}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home