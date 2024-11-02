import { UserProvider } from './UseContext/UserProvider';
import UserProfile from './UseContext/UserProfile';
import Counter from './UseReducer/counter';
import TextInput from './UseRef/TextInput'
import Calcul from './UseMemo/Calcul';
import Articles from './UseCallBack/Articles';
import ListArticles from './monolothic/ListArticles';
import Compteur from './UseRef/Compteur';
import Compteurs from './UseReducer/Compteurs';

function App() {
 
  return (
    <>
      <Counter />
      <TextInput />
    <UserProvider>
    <UserProfile />
    </UserProvider>
  {/* useMemo */}
    <Calcul />
    {/* useCallBack */}
    <Articles />

    {/* ueRef */}
    <TextInput></TextInput>
    <Compteur />

    {/* useReducer counter */}
    <Counter/>
   
   {/* use monolothic */}
   <ListArticles/>

{/* useReducer */}
<Compteurs/>

{/* TP4 */}
<App/>
    </>
  )
}

export default App
