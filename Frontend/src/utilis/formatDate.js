 

 export const formatDate=(dateString, config)=>{
    
    const defaultOptions = {day : "numeric", month:"long", year:"numeric"};
    const options = config ? config : defaultOptions

     // Split the input date string and create a new date object in the correct format
  const [day, month, year] = dateString.split('-').map(Number);
  const formattedDate = new Date(year, month - 1, day); // Month is 0-based

  return formattedDate.toLocaleDateString('en-US', options);

 }