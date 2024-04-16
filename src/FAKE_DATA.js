export const lineChartData={
    labels:[
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets:[
 
        {
           label:"Raj_Steps",
           data:[3000,5000,4500,6000,8000,7000,9000],
           borderColor:"rgb(75,192,192)",
           
        },

        {
            label:"Deepak_Steps",
            data:[300,500,500,600,6900,7000,600],
            borderColor:"rgb(75,19,12)",
            
         },

         {
            label:"Abhishek_Steps",
            data:[3000,900,5000,7000,690,700,6000],
            borderColor:"rgb(705,19,12)",
            
         },
    ],
 };



 export const barData={
   labels:["Rent","Groceries","Utilies","Entertainment","Transportation"],
   datasets:[
      {
         label:"Expenses",
         data:[1200,300,1500,1800,1000],
         backgroundColor:[
            "rgba(255,99,132,0.2)",
            "rgba(54,162,235,0.2)",
            "rgba(255,206,86,0.2)",
            "rgba(75,192,192,0.2)",
            "rgba(153,102,255,0.2)",
      
      ],
         borderColor:[
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(75,192,192,1)",
            "rgba(153,102,255,1)",
         ],
         borderWidth:1,


      }

   ]

 }



 export const pieChartData={
  labels:["Facebook","Instagram","Twitter","YouTube","LinkedIn"],
  datasets:[
     {
        label:"Time Spent",
        data:[120,60,30,90,15],
        backgroundColor:[
         "rgba(255,99,132,0.9)",
         "rgba(54,162,235,0.9)",
         "rgba(255,206,86,0.9)",
         "rgba(75,192,192,0.9)",
         "rgba(153,102,255,0.9)",
   
   ],
   hoverOffset:4,} ] }