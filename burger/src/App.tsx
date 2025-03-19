import './App.css';
import { useState, useEffect } from 'react';
import ActivePlayers from './components/ActivePlayers';
import Burger from './components/Burger';
import UpgradesMain from './components/UpgradesMain';
import axios from 'axios';
import BurgerPart from './components/BurgerPart';
import useAuth from './hooks/useAuth'; // Import the useAuth hook

interface CounterResponse {
  counter: number;
  message: string;
}

function App() {
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    main: 0,
    topbun: 0,
  });
  const [link, setLink] = useState('backend.wurdle.eu');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Login form
  const { user, loading, signUp, login, logout } = useAuth(); // Get auth state from useAuth hook

  useEffect(() => {
    if (user && user.email === 'onniklemetti12@gmail.com') {
      setLink('192.168.0.7');
    }
  }, [user]);

  // Function to fetch the counter value from the server
  const fetchCounter = async (type: string) => {
    try {
      const response = await axios.get<CounterResponse>(
        `https://${link}:3000/counter/${type}`
      );
      setCounters((prevCounters) => ({
        ...prevCounters,
        [type]: response.data.counter,
      }));
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
    }
  };

  // Fetch the initial counter value and set an interval to call fetchCounter every 250ms
  useEffect(() => {
    const fetchAllCounters = () => {
      fetchCounter('main');
      fetchCounter('topbun');
      fetchCounter('patty');
      fetchCounter('bottombun');
      fetchCounter('money');
    };

    fetchAllCounters(); // Call immediately

    // Set interval to fetch both counters every 250ms
    const intervalId = setInterval(fetchAllCounters, 250);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [link]);

  // Increment the counter
  const onIncrement = (add: number, type: string) => {
    if (type === 'main') {
      // Special POST request for "main" without the amount variable
      axios
        .post<CounterResponse>(`https://${link}:3000/counter/increment/main`)
        .then((response) => {
          console.log(response.data.counter);

          setCounters((prevCounters) => ({
            ...prevCounters,
            [type]: response.data.counter,
          }));
        })
        .catch((error) => {
          console.error('Error incrementing main counter:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
          }
        });
    } else {
      // Default behavior for all other types with the amount variable
      axios
        .post<CounterResponse>(
          `https://${link}:3000/counter/increment/${type}`,
          {
            amount: add,
          }
        )
        .then((response) => {
          console.log(response.data.counter);

          setCounters((prevCounters) => ({
            ...prevCounters,
            [type]: response.data.counter,
          }));
        })
        .catch((error) => {
          console.error('Error incrementing counter:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
          }
        });
    }
  };

  const onSell = () => {
    axios.get(`https://${link}:3000/sell`).catch((error) => {
      console.error('Error selling... bullshit.:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    });
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      signUp(email, password);
    } else {
      login(email, password);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while Firebase auth is being checked
  }

  return (
    <>
      {user ? (
        <>
          <button
            style={{ position: 'absolute', bottom: '25%' }}
            onClick={() => onSell()}
            className="sell"
          >
            Sell Burger
          </button>
          <button onClick={logout} className="LogOut">
            Log Out
          </button>
          <div className="MainBar">
            <progress value="50" max="100" className="MainBarReal"></progress>
            <span
              className="burger-count"
              style={{ left: '307%', whiteSpace: 'nowrap' }}
            >
              50%
            </span>
          </div>
          <div className="ActivePlayers">
            <ActivePlayers />
          </div>
          <div className="UpgradesMain">
            <UpgradesMain money={counters.money} />
          </div>
          <div className="Burger">
            <Burger
              image="burger"
              count={counters.main}
              onIncrement={onIncrement}
            />
          </div>
          <div className="CheeseBurger">
            <Burger
              image="cheeseburger"
              count={counters.main}
              onIncrement={onIncrement}
              top="-7%"
            />
          </div>
          <div className="LettuceBurger">
            <Burger
              image="lettuceburger"
              count={counters.main}
              onIncrement={onIncrement}
              width="75%"
              top="-13.5%"
            />
          </div>
          <div className="BaconCheeseBurger">
            <Burger
              image="baconcheeseburger"
              count={counters.main}
              onIncrement={onIncrement}
              top="-10.25%"
            />
          </div>
          <div className="DeluxeBurger">
            <Burger
              image="DeluxeBurger"
              count={counters.main}
              onIncrement={onIncrement}
            />
          </div>
          <div className="BurgerPart">
            <BurgerPart
              count={counters.topbun}
              onIncrement={onIncrement}
              right="43%"
              top="10%"
              width="350px"
              image="burgerbuntop"
              type="topbun"
            />
            <BurgerPart
              count={counters.patty}
              onIncrement={onIncrement}
              right="43%"
              top="30%"
              width="350px"
              image="patty"
              type="patty"
            />
            <BurgerPart
              count={counters.bottombun}
              onIncrement={onIncrement}
              right="43%"
              top="62%"
              width="350px"
              image="burgerbunbottom"
              type="bottombun"
            />
          </div>
        </>
      ) : (
        <>
          <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
          <form onSubmit={handleAuthSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
          </form>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Log in' : 'Sign up'}
          </button>
        </>
      )}
    </>
  );
}

export default App;
