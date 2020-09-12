1) Code compile -> all process.env variables replace by their values.
2) Code bundling -> all import and require files will be bundle and will get refrence
3) Code Runtime -> 

Here if I pass logo as props. require(logo) will give error. Because at runtime 
require('../assets/react.png') will not found. That is why require(process.env.REACT_APP_LOGO) will work.