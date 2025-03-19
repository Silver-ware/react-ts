type User = {
  id: number,
  fullName: string,
  username: string,
  password: string,
}

type Data = {
  data: User,
  index: number,
}


function Table({data, index}: Data) {
  return (
    <div className={`${index % 2 === 0 ? 'bg-amber-600 text-white': ''} flex flex-1 hover:bg-amber-200 hover:text-black h-full py-4 rounded-sm`}>
      <div className="basis-1/4 text-center">{data.id}</div>
      <div className="basis-1/4 text-center">{data.fullName}</div>
      <div className="basis-1/4 text-center">{data.username}</div>
      <div className="basis-1/4 text-center">{data.password}</div>
    </div>
  );
}

export default Table;