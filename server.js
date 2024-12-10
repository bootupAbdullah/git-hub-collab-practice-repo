const App = () => {
    const [navItem, setNavItem] = useState("");
    const handleClick = (navItem) => {
      setNavItem(navItem);
      console.log(navItem);
    };