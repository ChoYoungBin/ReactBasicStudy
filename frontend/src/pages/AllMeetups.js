import MeetupList from '../component/meetups/MeetupList'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://navermap.qhelp.kr/img/%EB%84%A4%EC%9D%B4%EB%B2%84_%EC%84%B8%EA%B3%84%EC%A7%80%EB%8F%841.png',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
]

const AllMeetups = () => {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}

export default AllMeetups
