import HeaderBar from "../HeaderBar";
import DataTable from 'react-data-table-component';
import { ChartData } from "../ChartData";



export default function Tables()
{
    const columns = [
        {
            name: 'Month',
            selector: row => row.month,
        },
        {
            name: 'Sales',
            selector: row => row.Sale,
        },
        {
            name: 'Returns',
            selector: row => row.Return,
        },
    ];
    
   
    
    return(
        <div className='flex flex-col w-full h-screen lg:p-5 overflow-y-scroll'>
        <HeaderBar />
        <div className='flex flex-row ml-5 mt-5   font-bold'><h1>Sales And Returns</h1></div>
        <div className='flex flex-row lg:w-auto w-auto m-4 justify-center py-1 bg-white rounded-lg shadow-sm  lg:p-3 items-center'>

            <div className="flex flex-col lg:w-full w-full h-full">
            <DataTable
            columns={columns}
            data={ChartData}
            responsive={true}
            highlightOnHover={true}
            striped={true}
            pagination={true}
            paginationPerPage={10}
        />
            </div>





        </div>

       
    </div>
    )
}