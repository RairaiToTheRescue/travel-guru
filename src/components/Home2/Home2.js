import React from 'react';
import Room from '../../Room2/Room2';


const Home2 = () => {
    const style = {
        marginRight: '580px',
        marginLeft: '560px',
        marginTop: '-460px', 

    }
    const rooms = [
        {
            title1: 'STAY IN SAJEK',
            imgUrl: 'https://skystarresort.com/wp-content/uploads/2019/07/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593.jpg',
            paragraph1:'Finding Hotel For Spend Your Holidays? This Is The The Coolest Hotel Of The Town. Stay Here & Enjoy Tightly! Be Our Gest.',
            button2: "BOOK"
        },
        {
            title2: 'Stay In SAJEK',
            imgUrl: 'https://i.pinimg.com/originals/f7/ac/a2/f7aca20ce4a8aa154332c0e017bfe06e.jpg',
            paragraph2:'Live in luxurious Hotel. Live With Your Family & Friends. Spend Your Vacation Smoothly. We Are Ready To Serve Our Best.',
            button1: "BOOK"
            
        },
        {
            title3: 'Stay In SHUNDARBANS',
            imgUrl:'http://matmazelperde.com/wp-content/themes/matmazelperde/img/102.jpg',
            paragraph3:'If You Wanna Spend Your Holidays On This Town & Looking For A Simple Hotel To Relax. Then Come On Here. We Are Giving Many Facilities On Cheap.',
            button3: "BOOK"
        }
    ]
    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home2;