import { formatDistanceToNow, parseISO } from 'date-fns';

export const formatCreatedAt = ( dateString ) => {
  const date = parseISO(dateString);

  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return timeAgo
}


export const formatDate = (date) => 
    new Date(date).toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  
    export const formatEventDate = (dateStr) => {
  if (!dateStr) return { day: "", month: "", year: "" };
  const eventDate = new Date(dateStr);
  return {
    day: eventDate.getDate(),
    month: eventDate.toLocaleString("en-US", { month: "short" }),
    year: eventDate.getFullYear(), // Add year
  };
};

    export const formatTime = (time) => 
        new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        });
      

        export const extractErrorMessage = (error) => {
            const getString = (data) => {
              return typeof data === "string" ? data : JSON.stringify(data);
            };
          
            if (error?.response?.data?.message) {
              return getString(error.response.data.message);
            } 
          
            if (error?.response?.data?.error) {
              return getString(error.response.data.error);
            } 
          
            if (error?.response?.error) {
              return getString(error.response.error);
            } 
          
            return getString(error?.message || "An unknown error occurred");
          };
          
