# Dashee: A Dashboard System for React

Dashee is a Dashboard component collection for your React Projects. 

## Take a look

<img src="https://i.ibb.co/nBJGxSp/localhost-3000.png" width="100%">

<br>

## What is inside? 

This project is still under development. So new components will be added progressively. For now below components are available.

- Sidebar Menu
- Stat Cards
- Bar Chart
- Doughnut Chart
- Header Bar


## Dependencies
- Tailwind CSS v3.0.23
- React Router
- Chart.js 
- React Icons

## Customization 

You can customize the dashboard by edtiting `App.js`. Currently all the relevant components are imported to the `App.js`. 

Child components are loaded into `Home.js`. It is the component uses to display all child components at the Home route. (`\`)

If you want to do some changes for the content, then go to `Home.js` and do the customizations. 

### Example
Edit `Home.js`

        <div className='flex flex-col w-full h-screen p-5 overflow-y-scroll'>
            <HeaderBar />
            <div className='flex flex-row ml-5 mt-5 mb-5  font-bold'><h1>Overview</h1></div>
            <div className='flex flex-row w-full flex-wrap justify-start'>
            <!--Load your StatCards here. Max 3 -->
                <StatCard/> 
                <StatCard />
                <StatCard />
            </div>
            <div className='flex flex-row ml-5 mt-5 font-bold ' >
                <h1>Sales vs Returns</h1></div>
            <div className='flex flex-row w-full'>
            <!--Load your Charts here. You have to adjust the width of each chart component according to your layout -->
                <BarGraph chartData={chartData} />
                <PieChart chartData={chartData} />
            </div>
        </div> 

Chart data are loaded via state for the moment. You can use an API call to fetch data and load data to the chart. 



Thank you.
