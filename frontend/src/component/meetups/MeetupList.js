import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'
const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    img={meetup.img}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    )
}
export default MeetupList
