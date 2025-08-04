import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';


const Home = () => {
  const loggedIn = { firstName: 'Menu', lastName: 'Minyu', email: 'menuminyu@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext ="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}/>
        </header> 
        
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50},{currentBalance: 123.50}]}>

      </RightSidebar>
    </section>
  )
}

export default Home