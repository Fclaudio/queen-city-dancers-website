const {v4: uuidv4} = require('uuid');

const danceSessions = [
    {
        category: 'STREET',
        sessions: 
        [
            {
                id: '1',
                title: 'BBOYING @ FREEDOM PARK',
                host: 'Bboy Squad',
                date: '2021-12-20',
                start_time: '14:00',
                end_time: '18:00',
                meeting_location: 'Band Shell in the middle of the park',
                address: '1908 East Blvd, Charlotte, NC 28262',
                image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/02/22/55008427.jpg',
                details: 'This is a meeting for breakdancing beginners',
                category: 'STREET'
            },
            {
                id: '2',
                title: 'KRUMPING @ FREEDOM PARK',
                host: 'Geek Squad',
                date: '2021-10-02',
                start_time: '18:00',
                end_time: '20:00',
                meeting_location: 'Band Shell in the middle of the park',
                address: '1908 East Blvd, Charlotte, NC 28262',
                image: 'https://i.ytimg.com/vi/LqvXIiHj9MA/maxresdefault.jpg',
                details: 'This is a meeting for advance krumping',
                category: 'STREET'
            },
            {
                id: '3',
                title: 'LOCKING @ NODA',
                host: 'Locking Crew',
                date: '2021-02-19',
                start_time: '16:00',
                end_time: '18:00',
                meeting_location: 'In front of Optimist Hall',
                address: '1115 N Brevard St, Charlotte, NC 28206',
                image: 'https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5fb5779d4ad8ff081b056ff9_2.jpg',
                details: 'This is a meeting for intermediate locking',
                category: 'STREET'
            }
        ]
    },
    {
        category: 'SALON',
        sessions: 
        [
            {
                id: '4',
                title: 'SALSA @ SOUTHEND',
                host: 'Salseros Latinos',
                date: '2021-12-20',
                start_time: '14:00',
                end_time: '18:00',
                meeting_location: 'In front of Jenis Ice Creams',
                address: '1920 Camden Rd, Charlotte, NC 28203',
                image: 'https://www.liveabout.com/thmb/JS0NvnJu3SEg1OTAzwfR7g0fSHo=/4268x3201/smart/filters:no_upscale()/hispanic-salsa-dancers-performing-580491737-5b72290ac9e77c0050753fb0.jpg',
                details: 'This is a meeting for salsa dancing beginners',
                category: 'SALON'
            },
            {
                id: '5',
                title: 'TANGO @ PLAZA MIDWOOD',
                host: 'Argentinian Tangos',
                date: '2021-10-02',
                start_time: '19:00',
                end_time: '20:00',
                meeting_location: 'Meet in front of the Brewery',
                address: '1909 Chatham Ave, Charlotte, NC 28205',
                image: 'https://www.contiki.com/six-two/wp-content/uploads/2018/01/810-argetina-tango-dancers.jpg',
                details: 'This is a meeting for advance tango dancers',
                category: 'SALON'
            },
            {
                id: '6',
                title: 'BACHATA @ NODA',
                host: 'Dominican Bachateros',
                date: '2021-02-19',
                start_time: '20:00',
                end_time: '22:00',
                meeting_location: 'In front of Optimist Hall',
                address: '1115 N Brevard St, Charlotte, NC 28206',
                image: 'https://i.ytimg.com/vi/NdTdX4_aQHo/maxresdefault.jpg',
                details: 'This is a meeting for intermediate bachata dancers',
                category: 'SALON'
            }
        ]
    }
];

//Return all of the available sessions. 
exports.find = () => danceSessions;

//Return the story based on the id
exports.findById = function(id){
    let selected_session;
    danceSessions.forEach(session=>{session.sessions.forEach(
        meeting=>{if (meeting.id === id){
            selected_session = meeting;
        }}
    )});
    return selected_session;
};

//Add session into array
exports.save = function (submitted_session){
    
    //Assign an id to the new submitted session
    submitted_session.id = uuidv4();

    //Get a list of all the available categories
    categoryList = []
    danceSessions.forEach(available_session=>{
        categoryList.push(available_session.category);
    });

    //Ensure the newly added session is whithin one of the existing categories
    if (categoryList.includes(submitted_session.category)){
        danceSessions.forEach(available_session=>{
            //console.log(available_session.category);
            //If the category already exist add to sessions
            if (available_session.category === submitted_session.category){
                available_session.sessions.push(submitted_session)
            }
        });
        //If it is a new category create and append to that
    } else {
        danceSessions.push(
            {
                category: submitted_session.category,
                sessions: [submitted_session]
            }
        )
    }
};

test_array = {
    id: '6',
    title: 'BACHATA @ NODA',
    host: 'Dominican Bachateros',
    date: '2021-02-19',
    start_time: '20:00',
    end_time: '22:00',
    meeting_location: 'In front of Optimist Hall',
    address: '1115 N Brevard St, Charlotte, NC 28206',
    image: 'https://i.ytimg.com/vi/NdTdX4_aQHo/maxresdefault.jpg',
    details: 'This is a meeting for advance bachata dancers',
    category: 'STREET'
}


//Update existing session
exports.updateById = function(id, newSession){
    let selected_session = this.findById(id);

    firstIndex = danceSessions.findIndex(session=>session.category === selected_session.category);
    secondIndex = danceSessions[firstIndex].sessions.findIndex(session1=>session1.id === selected_session.id)
    console.log(secondIndex);
    console.log(selected_session);

    if(selected_session) {
        //selected_session.id = uuidv4();
        selected_session.title = newSession.title;
        selected_session.category = newSession.category;
        selected_session.date = newSession.date;
        selected_session.start_time = newSession.start_time;
        selected_session.end_time = newSession.end_time;
        selected_session.meeting_location = newSession.meeting_location;
        selected_session.address = newSession.address;
        selected_session.image = newSession.image;
        selected_session.details = newSession.details;


        updated_array  = 
        {
            id: selected_session.id,
            title: selected_session.title,
            host: selected_session.host,
            date: selected_session.date,
            start_time: selected_session.start_time,
            end_time: selected_session.end_time,
            meeting_location: selected_session.meeting_location,
            address: selected_session.address,
            image: selected_session.image,
            details: selected_session.details,
            category: selected_session.category
        }

        //Get a list of all the available categories
        categoryList = []
        danceSessions.forEach(available_session=>{
            categoryList.push(available_session.category);
        });

        //Ensure the newly added session is whithin one of the existing categories
        if (categoryList.includes(updated_array.category)){
            danceSessions.forEach(available_session=>{
                //console.log(available_session.category);
                //If the category already exist add to sessions
                if (available_session.category === updated_array.category){
                    available_session.sessions.push(updated_array)
                }
            });
            //If it is a new category create and append to that
        } else {
            danceSessions.push(
                {
                    category: updated_array.category,
                    sessions: [updated_array]
                }
            )
        }
        //For debugging purposes
        console.log(danceSessions)
        danceSessions[firstIndex].sessions.splice(secondIndex,1);

        if(danceSessions[firstIndex].sessions.length === 0){
            danceSessions.splice(firstIndex,1);
        }
        
        console.log(danceSessions)

        return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id) {
    selected_session = this.findById(id);
    
        if (selected_session){
            
            firstIndex = danceSessions.findIndex(session=>session.category === selected_session.category);
            secondIndex = danceSessions[firstIndex].sessions.findIndex(session1=>session1.id === selected_session.id)
            console.log(secondIndex);
            danceSessions[firstIndex].sessions.splice(secondIndex,1);
        
            if(danceSessions[firstIndex].sessions.length === 0){
                danceSessions.splice(firstIndex,1);
            }
            return true;
        } else {
            return false;
        }
};
