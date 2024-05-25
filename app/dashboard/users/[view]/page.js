import View from "@/app/_components/core/View";

const viewUserPage = () => {

  return (
    <div className="px-4 overflow-auto w-full min-h-full" >
        <View userView={true}/>
    </div>
  )
}

export default viewUserPage;