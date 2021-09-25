import Cards from '../../comps/cards';
import classes from '../../styles/Albums.module.css';

const Album = () => {

    // const albums = ["Judaa 3", "Moon Child Era"];

    const albums = [
        {title: "Judaa 3", image: "https://i.scdn.co/image/ab67616d0000b2731bbccdf9094270ef73e39b91", l: "judaa3"},
        {title: "Moon Child Era", image: "https://static.toiimg.com/photo/msid-85233067/85233067.jpg?82405", l: "moonchildera"},
    ]

    return (
        <>
            <h1 className={classes.album_name}>Albums</h1>
            <div className={classes.albums}>
                { albums.map(album => <Cards song={album} />)}
            </div>
        </>
    );
}
 
export default Album;