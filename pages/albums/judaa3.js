import Card from '../../comps/Card';
import classes from '../../styles/Albums.module.css';

const Judaa3 = () => {

    const songs = [
        {
            title: "Band Darvaze Ballad Mix",
            image: "https://www.originallyric.com/wp-content/uploads/2021/09/Band-Darwaze-Ballad-Lyrics-Amrinder-Gill.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FBand%20Darvaze%20Ballad%20Mix.mp3?alt=media&token=60ee08db-742f-4140-92f2-855708a64c42",
            index: 0,
            album: "Judaa 3",
            singer: "Amrinder Gill",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "COMING SOON"
        },
        {
            title: "Band Darvaze",
            image: "https://www.ilyricshub.com/wp-content/uploads/2021/09/band-darwaze-amrinder-gill.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FBand%20Darvaze.mp3?alt=media&token=ffbc1623-a021-4101-8e4c-d6ebb2ef92b6",
            index: 1,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=q-U5nCDAgtY"
        },
        {
            title: "Chal Jindiye",
            image: "https://i.ytimg.com/vi/fCDA5x3wlVk/hqdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FChal%20Jindiye.mp3?alt=media&token=d59dcab4-d882-4a85-8b3f-9b0d10173195",
            index: 2,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=mH_LFkWxpI0"
        },
        {
            title: "Gussa",
            image: "https://www.ilyricshub.com/wp-content/uploads/2021/09/gussa-amrinder-gill.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FGussa.mp3?alt=media&token=1848d10a-7d5a-4155-8b71-c4ac629de16a",
            index: 3,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Arjan Dhillion",
            video: "https://www.youtube.com/watch?v=_sOHjBWB_Tg"
        },
        {
            title: "Muqabla",
            image: "https://i.ytimg.com/vi/7RJW9GUPL1c/maxresdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FMuqabla.mp3?alt=media&token=5553d6f9-e95e-45b2-a513-47ad0c1e51f5",
            index: 4,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "https://www.youtube.com/watch?v=fyBzPE6w6-k"
        },
        {
            title: "Necklace",
            image: "https://customercarelife.com/wp-content/uploads/2020/07/Amrinder-Gill.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FNecklace.mp3?alt=media&token=973a9e41-b446-4a45-bca2-18348dd87f76",
            index: 5,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "Not Available"
        },
        {
            title: "Pagg",
            image: "https://www.lyricsgoo.com/wp-content/uploads/2021/09/Pagg-Lyrics-Amrinder-Gill-ft.-NseeB.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FPagg.mp3?alt=media&token=8580421c-0ab4-48b8-808f-9a4c1df61ac6",
            index: 6,
            album: "Moon Child Era",
            singer: "Diljit Dosanjh",
            music: "Intense",
            lyrics: "Raj Ranjodh",
            video: "Not Available"
        },
        {
            title: "Zid Kaisi",
            image: "https://i.ytimg.com/vi/tXVIwB5sfno/hqdefault.jpg",
            song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Judaa%203%2FZid%20Kaisi.mp3?alt=media&token=6dfbda00-4669-42ec-a3c3-3b33ec3e2222",
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
            <h1 className={classes.album_name}>Judaa 3</h1>
            <div className={classes.albums}>
                {songs.map(song => <Card song={song} key={song.index} />)}
            </div>
        </>
    );
}
 
export default Judaa3;