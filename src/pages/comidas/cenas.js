import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import EmptySection from "@/components/EmptySection/EmptySection"

const Cenas = () => {
    
    return (
        <>
            <CustomizedTitle text="Cenas" />
            <main>
                <EmptySection inConstruction text="Esta página está en construcción" />
            </main>
           
        <style jsx>
        {` 
            main {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
                justify-content: center;
            }
        `}
        </style>
     </>
      
    )
}

export default Cenas