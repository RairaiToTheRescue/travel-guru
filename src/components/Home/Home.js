import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display:'flex' ,
        marginRight: '40px',
        marginLeft: '530px',
        marginTop: '-400px',
        justifyContent: 'space-between',
        position:'static',

    }
    const rooms = [
        {
            title1: 'SREEMANGAL',
            imgUrl: 'https://images.unsplash.com/photo-1469443168033-4623821959af?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60',
        },
        {
            title2: 'SAJEK',
            imgUrl: 'https://serving.photos.photobox.com/7043189049bc58e811174d1b3127ff775f91fc059462fcf5622e8eb0de5809fef92c2e7b.jpg',
            
        },
        {
            imgUrl:'https://serving.photos.photobox.com/047380132c28e513911c550ebc3c182c20dda1155cc84dd9397e56d59b8dce65412cd7a8.jpg',
            title3: 'SHUNDARBANS'
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

export default Home;