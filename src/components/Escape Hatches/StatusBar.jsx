import useOnline from "../../utility/useOnline";


export default function StatusBar() {

    const isOnline = useOnline();

  return <>
  
  <h1 className="text-3xl font-semibold text-center">{
    
    isOnline ? 'Online' : 'Offline'}</h1>
  </>;
}
