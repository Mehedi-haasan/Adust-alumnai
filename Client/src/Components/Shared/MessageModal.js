import { NavLink } from 'react-router-dom'


const MessageModal = ({ userInfo, data ,isOpen}) => {

    const data2 =[
        {
            id:1,
            name:"Mehedi hasan",
            image_url:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
            comment:"Hi"
        },
        {
            id:1,
            name:"Mehedi hasan",
            image_url:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
            comment:"Hi"
        },
        {
            id:1,
            name:"Mehedi hasan",
            image_url:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
            comment:"Hi"
        },
    ]

    return (
        <div>
            <h1>Chats</h1>
            {
                data2.map((user) => (
                    <div className='flex px-1 py-1'>
                        <div><img className='h-[35px] w-[35px] rounded-full mr-2' src={user.image_url} alt='' /></div>
                        <div>
                            <h1 className='font-semibold'>{user.name}</h1>
                            <h1 className='text-sm'>{user.comment}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MessageModal
