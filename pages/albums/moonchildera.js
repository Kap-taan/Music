import Card from '../../comps/Card';
import classes from '../../styles/Albums.module.css';

const Albums = () => {

    const songs = [
        {
            title: "VOID",
            image: "https://i.ytimg.com/vi/kwhfmFhQ_fc/maxresdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FVoid(1).mp3?alt=media&token=6f97a3bd-2d01-4751-841f-310976cb47ee",
            index: 0,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "COMING SOON"
        },
        {
            title: "Black and White",
            image: "https://www.lyricsbull.com/wp-content/uploads/2021/09/black-white-diljit-dosanjh.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FBlack%20White(1).mp3?alt=media&token=58ae518c-8bc3-4f91-a01f-eef2be72c783",
            index: 1,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=q-U5nCDAgtY"
        },
        {
            title: "LOVER",
            image: "https://static.toiimg.com/photo/msid-85511378/85511378.jpg?69986",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FLover(1).mp3?alt=media&token=c1e39d03-ba43-4a19-8c40-c2a9937041d5",
            index: 2,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=mH_LFkWxpI0"
        },
        {
            title: "LUNA",
            image: "https://i.ytimg.com/vi/OvlmXqd9uBY/maxresdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FLuna(1).mp3?alt=media&token=992e410e-b4db-4357-8815-e9600411f2f9",
            index: 3,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Arjan Dhillion",
            video: "https://www.youtube.com/watch?v=_sOHjBWB_Tg"
        },
        {
            title: "VIBE",
            image: "https://i.ytimg.com/vi/ubRL9SvcpXw/maxresdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FVibe(1).mp3?alt=media&token=7dfc9cba-5722-4cca-bde1-89c0cae4e3fa",
            index: 4,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=fyBzPE6w6-k"
        },
        {
            title: "DA CREW",
            image: "https://i.ytimg.com/vi/PWSMSny9RN0/hqdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FDa%20Crew(1).mp3?alt=media&token=0c42c7bf-8ce8-42cb-aa1c-4d8836912724",
            index: 5,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "Not Available"
        },
        {
            title: "Champagne",
            image: "https://i.ytimg.com/vi/UpN1swlT1eU/mqdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FChampagne(1).mp3?alt=media&token=4bf367e7-3d1f-4aec-9df3-f0b5fecd1924",
            index: 6,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "Not Available"
        },
        {
            title: "HOOPS",
            image: "https://i.ytimg.com/vi/bRUvh1me7wQ/hqdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FHoops(1).mp3?alt=media&token=bdda2238-ac1b-4a4f-8db6-8804e5ce8df1",
            index: 7,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "Not Available"
        },

    ]

    return (
        <>
            <h1 className={classes.album_name}>MOON CHILD ERA</h1>
            <div className={classes.albums}>
                {songs.map(song => <Card song={song} key={song.index} />)}
            </div>
        </>
    );
}
 
export default Albums;