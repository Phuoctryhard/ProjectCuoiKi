import HeaderAdmin from '../../Page/HeaderAdmin/index';
export default function AdminLayout({children}){
  return (
    <div>
       <HeaderAdmin />
      <div>{children}</div>

    </div>
  )
}