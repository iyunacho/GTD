import SearchBar from "../../components/SearchBar";
import { SampleInterface } from "../../interfaces/SampleInterface";
import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import './index.css'
interface TimelineProps {
    eventData: SampleInterface[];
}
const TimelineView = ( {eventData}: TimelineProps ) => {
    const tdDate = new Date();
    const year = tdDate.getFullYear();
    const month = tdDate.getMonth() + 1;
    // const groups = [{id:1, title:"1"}];
    const transformEventData = (events:SampleInterface[]) => {
        const tlEvents = events.filter((event)=> !event.startDate && !event.endDate);
        return tlEvents.map(event => ({
            id: (event.id).getTime(),
            group: 1,
            title: event.title,
            start_time: (event.startDate as Date).getTime(),
            end_time: (event.endDate as Date).getTime(),
        }));
    }
    return (
      <div>
        <h1>Timeline</h1>
        <SearchBar></SearchBar>
        <div id="timeline-wrapper">
            <Timeline
                groups={[]}
                items={transformEventData(eventData)}
                defaultTimeStart={new Date(year, month, 1)}
                defaultTimeEnd={new Date(year, month+1, 0)}
                canMove={false}
            >
                <TimelineHeaders>
                    <SidebarHeader>
                        {({ getRootProps }) => null}
                    </SidebarHeader>
                    <DateHeader unit="day" />
                </TimelineHeaders>
            </Timeline>
        </div>
      </div>
    );
  };
  
  export default TimelineView;