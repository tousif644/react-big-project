import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';

const TestTimeline = () => {
    return (
        <div style={{background:"#252525"}}>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019' iconStyle={{background:"#3e497a",color:"white"}} >
                    <h1 className = "vertical-timeline-element-title">My Random High School Random Place Random State</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum consequuntur delectus corrupti fuga culpa nam modi soluta, dignissimos nulla numquam voluptates reiciendis fugiat aut consectetur? Est at soluta maiores sint aspernatur veritatis modi voluptatibus voluptates dolorem, inventore laborum! Error.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019' iconStyle={{background:"#3e497a",color:"white"}} >
                    <h1 className = "vertical-timeline-element-title">My Random High School Random Place Random State</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum consequuntur delectus corrupti fuga culpa nam modi soluta, dignissimos nulla numquam voluptates reiciendis fugiat aut consectetur? Est at soluta maiores sint aspernatur veritatis modi voluptatibus voluptates dolorem, inventore laborum! Error.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019' iconStyle={{background:"#3e497a",color:"white"}} >
                    <h1 className = "vertical-timeline-element-title">My Random High School Random Place Random State</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum consequuntur delectus corrupti fuga culpa nam modi soluta, dignissimos nulla numquam voluptates reiciendis fugiat aut consectetur? Est at soluta maiores sint aspernatur veritatis modi voluptatibus voluptates dolorem, inventore laborum! Error.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    );
};

export default TestTimeline;