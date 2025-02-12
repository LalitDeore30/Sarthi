// Initialize map with OpenStreetMap using Leaflet
const map = L.map('map').setView([18.5204, 73.8567], 12); // Center on Pune, India

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add marker for Pune as a starting point
const puneMarker = L.marker([18.5204, 73.8567]).addTo(map)
    .bindPopup('Pune, India')
    .openPopup();

// Simulated bus stop data
const busStops = [
    { name: "Hinjawadi Maan Phase 3", lat: 18.576553, lon: 73.688178, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Tech Mahindra", lat: 18.581104, lon: 73.687604, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Tata Motors", lat: 18.585131, lon: 73.696387, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Power House Hinjawadi", lat: 18.589022, lon: 73.704942, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Infosys Phase 2", lat: 18.593475, lon: 73.707658, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Emcure", lat: 18.596037, lon: 73.712839, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wipro Company Circle", lat: 18.596858, lon: 73.717895, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Tata Johnsan", lat: 18.594508, lon: 73.728077, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Geometric", lat: 18.593441, lon: 73.73245, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Siemens", lat: 18.591144, lon: 73.733002, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Infosys Phase 1", lat: 18.586352, lon: 73.733913, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shivaji Chowk Hinjawadi", lat: 18.591606, lon: 73.738883, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Hinjawadi Jakat Naka", lat: 18.590977, lon: 73.746943, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Savtamali Mandir", lat: 18.592078, lon: 73.754691, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wakad Chowk", lat: 18.592429, lon: 73.761771, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Mount Vert Society Wakad", lat: 18.590099, lon: 73.769593, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Mankar Chowk", lat: 18.589982, lon: 73.774393, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Apple Hospital", lat: 18.588616, lon: 73.781315, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vishalnagar", lat: 18.588332, lon: 73.784748, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wakad Phata", lat: 18.587935, lon: 73.789569, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Rakshak Chowk", lat: 18.581265, lon: 73.798806, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Aundh Hospital", lat: 18.576896, lon: 73.803226, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sangvi Phata", lat: 18.573403, lon: 73.806893, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Aundhgaon", lat: 18.566517, lon: 73.812009, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bodygate", lat: 18.563131, lon: 73.813502, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bremen Chowk", lat: 18.559727, lon: 73.815579, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sindh Colony Aundh Road", lat: 18.556645, lon: 73.81788, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kasturba Gandhi Vasahat", lat: 18.555146, lon: 73.818967, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gol Market Aundh Road", lat: 18.551838, lon: 73.818967, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bal Kalyan Sanstha", lat: 18.548837, lon: 73.82356, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Pune Vidhyapeeth Gate", lat: 18.541161, lon: 73.83671, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "E Square", lat: 18.534976, lon: 73.83661, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Pumping Station", lat: 18.534976, lon: 73.838781, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Mhasoba Gate", lat: 18.533121, lon: 73.841533, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Simla Office", lat: 18.530748, lon: 73.847968, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "COEP Hostel", lat: 18.528638, lon: 73.852335, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Modern High School", lat: 18.524741, lon: 73.849472, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ma Na Pa", lat: 18.522409, lon: 73.852753, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Hinjawadigaon", lat: 18.591702, lon: 73.739, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sant Tukaram Mangal Karyalay", lat: 18.599402, lon: 73.744126, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bhumkarvasti", lat: 18.602904, lon: 73.749301, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bhumkar Chowk", lat: 18.606017, lon: 73.752639, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kala Khadak Vasahat", lat: 18.610465, lon: 73.759434, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ganeshnagar Dange Chowk", lat: 18.612834, lon: 73.762511, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Dange Chowk", lat: 18.614648, lon: 73.766066, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Laxmannagar", lat: 18.611483, lon: 73.768667, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "16 Number", lat: 18.607839, lon: 73.772062, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kalewadi Phata", lat: 18.604538, lon: 73.775959, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shivrajnagar", lat: 18.599592, lon: 73.780655, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Jagtap Dairy", lat: 18.593459, lon: 73.784509, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shivaji Putla", lat: 18.526318, lon: 73.852793, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kumbharwada", lat: 18.524679, lon: 73.85872, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gadital", lat: 18.527027, lon: 73.864834, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Collector Kacheri", lat: 18.524797, lon: 73.871778, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Pune Station", lat: 18.526994, lon: 73.872806, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Pune Station Depo", lat: 18.527068, lon: 73.876633, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vadgaonsheri", lat: 18.543189, lon: 73.923196, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Dattamandir Wadgaonsheri", lat: 18.546513, lon: 73.921381, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Khardkarnagar", lat: 18.550975, lon: 73.920919, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Tempo Chowk", lat: 18.555067, lon: 73.920763, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Somnathnagar", lat: 18.556796, lon: 73.921375, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Someshwar Mandir", lat: 18.559708, lon: 73.921204, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vimannagar Corner", lat: 18.561225, lon: 73.919577, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vadgaonsheri Phata", lat: 18.558923, lon: 73.912333, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ramwadi Jakat Naka", lat: 18.554935, lon: 73.905001, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shastrinagar Nagar Road", lat: 18.551971, lon: 73.895846, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wadia Bungalow", lat: 18.54846, lon: 73.892245, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gunjan Corner", lat: 18.545703, lon: 73.888103, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Yerawada", lat: 18.545218, lon: 73.885535, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bundgarden", lat: 18.540639, lon: 73.883628, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wadia College", lat: 18.534803, lon: 73.880799, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Jahangir Hospital", lat: 18.532523, lon: 73.877463, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Alankar Talkies", lat: 18.527906, lon: 73.875018, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Income Tax Office", lat: 18.525427, lon: 73.876599, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "GPO", lat: 18.523591, lon: 73.875318, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ambedkar Bhavan", lat: 18.524934, lon: 73.86844, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shubham Society Nagar Road", lat: 18.554589, lon: 73.919462, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vadgaon Sheri", lat: 18.54686, lon: 73.92415, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Mahavirnagar", lat: 18.54686, lon: 73.92415, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Punyanagri", lat: 18.54348, lon: 73.9238, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Niramay Hospital", lat: 18.550364, lon: 73.92458, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Anand Park", lat: 18.552758, lon: 73.925473, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Rahul Video", lat: 18.555136, lon: 73.925523, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shram Safalya", lat: 18.557547, lon: 73.926229, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sundrabai School", lat: 18.557697, lon: 73.928135, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sunitanagar", lat: 18.559751, lon: 73.928007, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Panyachi Taki Chandannagar", lat: 18.561527, lon: 73.92803, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "TATA Guard Room", lat: 18.562908, lon: 73.928637, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "5 Wa Mile", lat: 18.562317, lon: 73.923617, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sainathnagar", lat: 18.540092, lon: 73.931802, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vishnu Udyog", lat: 18.544697, lon: 73.930812, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Jog Engineering", lat: 18.547792, lon: 73.929866, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Wadeshwar", lat: 18.549214, lon: 73.929414, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Raghuveernagar", lat: 18.551219, lon: 73.928906, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Karhar Company", lat: 18.552925, lon: 73.928671, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ganeshnagar Anand Park", lat: 18.555017, lon: 73.928434, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Jilha Parishad", lat: 18.523333, lon: 73.869069, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "KEM Hospital", lat: 18.520358, lon: 73.867655, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Apollo Talkies", lat: 18.519453, lon: 73.864623, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Dagadi Nagoba", lat: 18.518375, lon: 73.86164, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sonya Maruti Chowk", lat: 18.515999, lon: 73.859798, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "City Post", lat: 18.515777, lon: 73.856819, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ganpati Chowk Laxmi Road", lat: 18.514957, lon: 73.854801, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gokhale Hall", lat: 18.514288, lon: 73.851612, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Common Wealth", lat: 18.514033, lon: 73.84917, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Vijay Talkies", lat: 18.513724, lon: 73.846216, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kulkarni Petrol Pump", lat: 18.512894, lon: 73.843946, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Deccan Corner", lat: 18.513403, lon: 73.841148, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Garware College", lat: 18.512053, lon: 73.838262, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sonal Hall", lat: 18.510598, lon: 73.83528, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Nal Stop", lat: 18.508951, lon: 73.832032, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "SNDT College", lat: 18.507318, lon: 73.828873, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Paud Phata", lat: 18.507255, lon: 73.823462, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Maruti Mandir Kothrud", lat: 18.503564, lon: 73.820344, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Karve Putla", lat: 18.502023, lon: 73.814799, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kothrud Stand", lat: 18.499951, lon: 73.813476, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Yashwantrao Chavan Natyagruha", lat: 18.502126, lon: 73.812775, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Paranjape School", lat: 18.501902, lon: 73.80888, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Badhai Sweets", lat: 18.501918, lon: 73.805116, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gananjay Society", lat: 18.500167, lon: 73.804769, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Andh Shala Kothrud", lat: 18.496169, lon: 73.803234, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Sahajanand Society", lat: 18.496492, lon: 73.80196, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ashish Garden", lat: 18.501968, lon: 73.802375, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Guru Ganeshnagar", lat: 18.50294, lon: 73.79942, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kumbre Park", lat: 18.503151, lon: 73.797887, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bhakti Shakti", lat: 18.665423, lon: 73.772236, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Krushna Mandir Nigdi", lat: 18.663446, lon: 73.773678, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Nigdi", lat: 18.659736, lon: 73.777132, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Tilak Chowk", lat: 18.659537, lon: 73.777878, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "LIC Corner", lat: 18.661925, lon: 73.781004, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Annapurna", lat: 18.662681, lon: 73.783607, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Yamunanagar", lat: 18.663982, lon: 73.787114, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ajanthanagar", lat: 18.662519, lon: 73.790054, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Thermax Company Chowk", lat: 18.660446, lon: 73.793541, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Kamalnayan Bajaj School", lat: 18.659317, lon: 73.796196, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bird Valley", lat: 18.6571, lon: 73.799301, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "HDFC", lat: 18.654647, lon: 73.803403, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "KSB Chowk", lat: 18.650335, lon: 73.809879, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Telco Company", lat: 18.644817, lon: 73.818215, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Yashwantnagar Telco Road", lat: 18.641, lon: 73.822628, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Gavli Matha", lat: 18.637073, lon: 73.826009, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Ganeshnagar Telco Road", lat: 18.634328, lon: 73.828278, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Power House Indrayninagar", lat: 18.632605, lon: 73.830251, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Indrayaninagar Corner", lat: 18.629477, lon: 73.832726, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Century Enka Company", lat: 18.627337, lon: 73.834818, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Electronic Sadan", lat: 18.622951, lon: 73.838535, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Landewadi", lat: 18.620724, lon: 73.844089, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shitalbaug", lat: 18.617318, lon: 73.843903, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Century Enka Colony", lat: 18.615904, lon: 73.847388, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Atlas Company", lat: 18.618639, lon: 73.849915, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Bhosari", lat: 18.623259, lon: 73.851417, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Maharashtra Chowk", lat: 18.624179, lon: 73.856257, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Shastri Chowk", lat: 18.624535, lon: 73.858831, busTimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    { name: "Durvankarnagar", lat: 18.625771, lon: 73.862036, busTimes: ["9:15 AM", "12:15 PM", "3:15 PM"] },
    { name: "Banacha Odha", lat: 18.627432, lon: 73.865198, busTimes: ["9:30 AM", "12:30 PM", "3:30 PM"] },

    { name: "Magzine", lat: 18.633510, lon: 73.874876, busTimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    { name: "Telco Godown", lat: 18.627534, lon: 73.874570, busTimes: ["10:15 AM", "1:15 PM", "4:15 PM"] },
    { name: "Dattanagar Alandi Road", lat: 18.622538, lon: 73.874123, busTimes: ["10:30 AM", "1:30 PM", "4:30 PM"] },
    { name: "Parandenagar", lat: 18.617844, lon: 73.874094, busTimes: ["10:45 AM", "1:45 PM", "4:45 PM"] },
    { name: "Dighi", lat: 18.612773, lon: 73.872958, busTimes: ["11:00 AM", "2:00 PM", "5:00 PM"] },
    { name: "AIT College", lat: 18.607100, lon: 73.873430, busTimes: ["11:15 AM", "2:15 PM", "5:15 PM"] },
    { name: "Wireless Colony", lat: 18.599792, lon: 73.873165, busTimes: ["11:30 AM", "2:30 PM", "5:30 PM"] },
    { name: "Ganeshnagar Alandi Road", lat: 18.597642, lon: 73.873345, busTimes: ["11:45 AM", "2:45 PM", "5:45 PM"] },
    { name: "Parade Ground Alandi Road", lat: 18.591016, lon: 73.874420, busTimes: ["12:00 PM", "3:00 PM", "6:00 PM"] },
    { name: "Mhaskevasti", lat: 18.585738, lon: 73.875292, busTimes: ["12:15 PM", "3:15 PM", "6:15 PM"] },
    { name: "Pathan Baba Darga", lat: 18.582507, lon: 73.875142, busTimes: ["12:30 PM", "3:30 PM", "6:30 PM"] },
    { name: "Kalas", lat: 18.579819, lon: 73.876346, busTimes: ["12:45 PM", "3:45 PM", "6:45 PM"] },
    { name: "RD Colony", lat: 18.576766, lon: 73.876625, busTimes: ["1:00 PM", "4:00 PM", "7:00 PM"] },
    { name: "Vishrantwadi", lat: 18.572747, lon: 73.879094, busTimes: ["1:15 PM", "4:15 PM", "7:15 PM"] },
    { name: "Kasturba Gandhi General Hospital", lat: 18.573189, lon: 73.882037, busTimes: ["1:30 PM", "4:30 PM", "7:30 PM"] },
    { name: "Renuka Bungalow", lat: 18.573396, lon: 73.884583, busTimes: ["1:45 PM", "4:45 PM", "7:45 PM"] },
    { name: "Gandhi Acid Company", lat: 18.573802, lon: 73.888143, busTimes: ["2:00 PM", "5:00 PM", "8:00 PM"] },
    { name: "Tingarenagar", lat: 18.574258, lon: 73.891412, busTimes: ["2:15 PM", "5:15 PM", "8:15 PM"] },
    { name: "Kekan gas", lat: 18.574767, lon: 73.895605, busTimes: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    { name: "509", lat: 18.574580, lon: 73.899595, busTimes: ["2:45 PM", "5:45 PM", "8:45 PM"] },
    { name: "Sanjay Park", lat: 18.572394, lon: 73.899765, busTimes: ["3:00 PM", "6:00 PM", "9:00 PM"] },
    { name: "Guardroom", lat: 18.568319, lon: 73.897202, busTimes: ["3:15 PM", "6:15 PM", "9:15 PM"] },
    { name: "Nagpur Chawl", lat: 18.563305, lon: 73.893176, busTimes: ["3:30 PM", "6:30 PM", "9:30 PM"] },
    { name: "Yerwada Post Office", lat: 18.559866, lon: 73.891774, busTimes: ["3:45 PM", "6:45 PM", "9:45 PM"] },
    { name: "Vikrikar Karyalay", lat: 18.554261, lon: 73.890090, busTimes: ["4:00 PM", "7:00 PM", "10:00 PM"] },
    { name: "Netaji Highschool", lat: 18.552017, lon: 73.889488, busTimes: ["4:15 PM", "7:15 PM", "10:15 PM"] },
    { name: "Tata Guardroom", lat: 18.562955, lon: 73.928635, busTimes: ["4:30 PM", "7:30 PM", "10:30 PM"] },
    { name: "Chandannagar", lat: 18.563342, lon: 73.932965, busTimes: ["4:45 PM", "7:45 PM", "10:45 PM"] },
    { name: "Kharadi Bypass", lat: 18.562404, lon: 73.937675, busTimes: ["5:00 PM", "8:00 PM", "11:00 PM"] },
    { name: "Patharevasti", lat: 18.558731, lon: 73.938263, busTimes: ["5:15 PM", "8:15 PM", "11:15 PM"] },
    { name: "Rakhaknagar Phase 1", lat: 18.558817, lon: 73.938356, busTimes: ["5:30 PM", "8:30 PM", "11:30 PM"] },
    { name: "Bitevasti", lat: 18.545228, lon: 73.935916, busTimes: ["5:45 PM", "8:45 PM", "11:45 PM"] },
    { name: "Mundhwa Gaon", lat: 18.532468, lon: 73.932892, busTimes: ["6:00 PM", "9:00 PM", "12:00 AM"] },
    { name: "Kirtanebaug", lat: 18.523369, lon: 73.932291, busTimes: ["6:15 PM", "9:15 PM", "12:15 AM"] },
    { name: "Bapusaheb Magarvasti", lat: 18.518103, lon: 73.932806, busTimes: ["6:30 PM", "9:30 PM", "12:30 AM"] },
    { name: "Mega City", lat: 18.514119, lon: 73.932554, busTimes: ["6:45 PM", "9:45 PM", "12:45 AM"] },
    { name: "Magarpatta Ma Na Pa Shala", lat: 18.512158, lon: 73.932533, busTimes: ["7:00 PM", "10:00 PM", "1:00 AM"] },
    { name: "Tilekarvasti", lat: 18.507554, lon: 73.929196, busTimes: ["7:15 PM", "10:15 PM", "1:15 AM"] },
    { name: "Noble Hospital", lat: 18.505100, lon: 73.927754, busTimes: ["7:30 PM", "10:30 PM", "1:30 AM"] },
    { name: "Magarpatta Dawakhana", lat: 18.502579, lon: 73.927758, busTimes: ["7:45 PM", "10:45 PM", "1:45 AM"] },
    { name: "Hadapsargaon", lat: 18.501774, lon: 73.933137, busTimes: ["8:00 PM", "11:00 PM", "2:00 AM"] },
    { name: "Hadapsar Gadital", lat: 18.500881, lon: 73.938931, busTimes: ["8:15 PM", "11:15 PM", "2:15 AM"] },
    { name: "Agrawal Colony", lat: 18.500047, lon: 73.944440, busTimes: ["8:30 PM", "11:30 PM", "2:30 AM"] },
    { name: "Akashwani", lat: 18.499649, lon: 73.948100, busTimes: ["8:45 PM", "11:45 PM", "2:45 AM"] },
    { name: "15 Number", lat: 18.499018, lon: 73.951774, busTimes: ["9:00 PM", "12:00 AM", "3:00 AM"] },
    { name: "Laxmi Colony", lat: 18.498473, lon: 73.957107, busTimes: ["9:15 PM", "12:15 AM", "3:15 AM"] },
    { name: "Shewalwadi Market", lat: 18.499444, lon: 73.963204, busTimes: ["9:30 PM", "12:30 AM", "3:30 AM"] },
    { name: "Manjari Farm", lat: 18.496678, lon: 73.967656, busTimes: ["9:45 PM", "12:45 AM", "3:45 AM"] },
    { name: "Shewalwadi", lat: 18.496653, lon: 73.969951, busTimes: ["10:00 PM", "1:00 AM", "4:00 AM"] },
    { name: "Pimpri", lat: 18.626917, lon: 73.805406, busTimes: ["10:15 PM", "1:15 AM", "4:15 AM"] },
    { name: "Kharalwadi", lat: 18.623384, lon: 73.807896, busTimes: ["10:30 PM", "1:30 AM", "4:30 AM"] },
    { name: "HA", lat: 18.620791, lon: 73.810084, busTimes: ["10:45 PM", "1:45 AM", "4:45 AM"] },
    { name: "Indian Card", lat: 18.615937, lon: 73.814825, busTimes: ["11:00 PM", "2:00 AM", "5:00 AM"] },
    { name: "Vallabhnagar", lat: 18.613111, lon: 73.817296, busTimes: ["11:15 PM", "2:15 AM", "5:15 AM"] },
    { name: "Nashik Phata", lat: 18.608172, lon: 73.821505, busTimes: ["11:30 PM", "2:30 AM", "5:30 AM"] },
    { name: "Kasarwadi", lat: 18.606119, lon: 73.825107, busTimes: ["11:45 PM", "2:45 AM", "5:45 AM"] },
    { name: "Kasarwadi", lat: 18.604412, lon: 73.824906, busTimes: ["7:00 AM", "12:00 PM", "5:00 PM"] },
    { name: "Marshal", lat: 18.601342, lon: 73.826247, busTimes: ["7:15 AM", "12:15 PM", "5:15 PM"] },
    { name: "Sandvik Company", lat: 18.594308, lon: 73.829912, busTimes: ["7:30 AM", "12:30 PM", "5:30 PM"] },
    { name: "Phugewadi", lat: 18.587385, lon: 73.833602, busTimes: ["7:45 AM", "12:45 PM", "5:45 PM"] },
    { name: "Dapodi", lat: 18.581448, lon: 73.834119, busTimes: ["8:00 AM", "1:00 PM", "6:00 PM"] },
    { name: "Bopodi", lat: 18.571615, lon: 73.837902, busTimes: ["8:15 AM", "1:15 PM", "6:15 PM"] },
    { name: "Manajibaug", lat: 18.569828, lon: 73.841737, busTimes: ["8:30 AM", "1:30 PM", "6:30 PM"] },
    { name: "Alegaonkar Shala", lat: 18.567893, lon: 73.845608, busTimes: ["8:45 AM", "1:45 PM", "6:45 PM"] },
    { name: "Khadki Bazar", lat: 18.566697, lon: 73.848951, busTimes: ["9:00 AM", "2:00 PM", "7:00 PM"] },
    { name: "Power House Khadki", lat: 18.564577, lon: 73.850776, busTimes: ["9:15 AM", "2:15 PM", "7:15 PM"] },
    { name: "Trikoni Baug", lat: 18.564167, lon: 73.853558, busTimes: ["9:30 AM", "2:30 PM", "7:30 PM"] },
    { name: "Vehicle Depo", lat: 18.563532, lon: 73.856534, busTimes: ["9:45 AM", "2:45 PM", "7:45 PM"] },
    { name: "Ammunition Stores", lat: 18.567599, lon: 73.856329, busTimes: ["10:00 AM", "3:00 PM", "8:00 PM"] },
    { name: "Ammunition Factory", lat: 18.569456, lon: 73.856676, busTimes: ["10:15 AM", "3:15 PM", "8:15 PM"] },
    { name: "Arsenal Factory Gate", lat: 18.573341, lon: 73.858408, busTimes: ["10:30 AM", "3:30 PM", "8:30 PM"] },
    { name: "Ordinance Club", lat: 18.571651, lon: 73.862927, busTimes: ["10:45 AM", "3:45 PM", "8:45 PM"] },
    { name: "Mula House", lat: 18.571047, lon: 73.866983, busTimes: ["11:00 AM", "4:00 PM", "9:00 PM"] },
    { name: "Mhasoba Mandir", lat: 18.569252, lon: 73.8669, busTimes: ["11:15 AM", "4:15 PM", "9:15 PM"] },
    { name: "Police Line Phulenagar", lat: 18.569155, lon: 73.869979, busTimes: ["11:30 AM", "4:30 PM", "9:30 PM"] },
    { name: "Shantinagar", lat: 18.568536, lon: 73.875814, busTimes: ["11:45 AM", "4:45 PM", "9:45 PM"] },
    { name: "Mental Corner", lat: 18.567363, lon: 73.878594, busTimes: ["12:00 PM", "5:00 PM", "10:00 PM"] },
    { name: "Sathe Biscuit", lat: 18.570480, lon: 73.878898, busTimes: ["12:15 PM", "5:15 PM", "10:15 PM"] },
    { name: "Kesnand Phata", lat: 18.580767, lon: 73.987652, busTimes: ["12:30 PM", "5:30 PM", "10:30 PM"] },
    { name: "Wagholi", lat: 18.578557, lon: 73.98067, busTimes: ["12:45 PM", "5:45 PM", "10:45 PM"] },
    { name: "Satav Highschool", lat: 18.580647, lon: 73.978992, busTimes: ["1:00 PM", "6:00 PM", "11:00 PM"] },
    { name: "Panmala Wagholi", lat: 18.579244, lon: 73.974147, busTimes: ["1:15 PM", "6:15 PM", "11:15 PM"] },
    { name: "Soyrik Mangal Karyalay", lat: 18.577086, lon: 73.968486, busTimes: ["1:30 PM", "6:30 PM", "11:30 PM"] },
    { name: "Godown Talera", lat: 18.576078, lon: 73.963982, busTimes: ["1:45 PM", "6:45 PM", "11:45 PM"] },
    { name: "Sai Satyam Society", lat: 18.574233, lon: 73.959068, busTimes: ["2:00 PM", "7:00 PM", "12:00 AM"] },
    { name: "Khandvenagar", lat: 18.572062, lon: 73.955205, busTimes: ["2:15 PM", "7:15 PM", "12:15 AM"] },
    { name: "Aaple Ghar", lat: 18.567483, lon: 73.948111, busTimes: ["2:30 PM", "7:30 PM", "12:30 AM"] },
    { name: "Janakbaba Darga", lat: 18.565467, lon: 73.94408, busTimes: ["2:45 PM", "7:45 PM", "12:45 AM"] },
    { name: "Power House Rastapeth", lat: 18.518646, lon: 73.868449, busTimes: ["3:00 PM", "8:00 PM", "1:00 AM"] },
    { name: "Nana Peth", lat: 18.514827, lon: 73.868713, busTimes: ["3:15 PM", "8:15 PM", "1:15 AM"] },
    { name: "AD Camp Chowk", lat: 18.512571, lon: 73.868829, busTimes: ["3:30 PM", "8:30 PM", "1:30 AM"] },
    { name: "Ramoshi Gate", lat: 18.509331, lon: 73.868327, busTimes: ["3:45 PM", "8:45 PM", "1:45 AM"] },
    { name: "Sonavane Hospital", lat: 18.505767, lon: 73.868594, busTimes: ["4:00 PM", "9:00 PM", "2:00 AM"] },
    { name: "ST Vibhagiya Karyalay", lat: 18.501037, lon: 73.86812, busTimes: ["4:15 PM", "9:15 PM", "2:15 AM"] },
    { name: "Ghorpadi Peth", lat: 18.500768, lon: 73.864075, busTimes: ["4:30 PM", "9:30 PM", "2:30 AM"] },
    { name: "Swargate Depo", lat: 18.500108, lon: 73.86118, busTimes: ["4:45 PM", "9:45 PM", "2:45 AM"] },
    { name: "Natraj Stand", lat: 18.500803, lon: 73.85722, busTimes: ["5:00 PM", "10:00 PM", "3:00 AM"] },
    { name: "Parvati Payatha", lat: 18.499187, lon: 73.852362, busTimes: ["5:15 PM", "10:15 PM", "3:15 AM"] },
    { name: "Dandekar Pul", lat: 18.501145, lon: 73.846516, busTimes: ["5:30 PM", "10:30 PM", "3:30 AM"] },
    { name: "Panmala", lat: 18.500513, lon: 73.844788, busTimes: ["5:45 PM", "10:45 PM", "3:45 AM"] },
    { name: "Parvati Jalshuddhikaran Kendra", lat: 18.497932, lon: 73.840957, busTimes: ["6:00 PM", "11:00 PM", "4:00 AM"] },
    { name: "Ganeshmala", lat: 18.495547, lon: 73.837802, busTimes: ["6:15 PM", "11:15 PM", "4:15 AM"] },
    { name: "PL Deshpande Udyan", lat: 18.493834, lon: 73.836006, busTimes: ["6:30 PM", "11:30 PM", "4:30 AM"] },
    { name: "Vitthalwadi Jakat Naka", lat: 18.490705, lon: 73.832867, busTimes: ["6:45 PM", "11:45 PM", "4:45 AM"] },
    { name: "Aidevnagar", lat: 18.488766, lon: 73.830231, busTimes: ["6:30 AM", "11:30 AM", "4:30 PM"] },
    { name: "Rajaram Pul", lat: 18.487321, lon: 73.828872, busTimes: ["6:45 AM", "11:45 AM", "4:45 PM"] },
    { name: "Vitthalwadi Sinhagad Road", lat: 18.483756, lon: 73.827752, busTimes: ["7:00 AM", "12:00 PM", "5:00 PM"] },
    { name: "Hingane", lat: 18.480242, lon: 73.825336, busTimes: ["7:15 AM", "12:15 PM", "5:15 PM"] },
    { name: "Anandnagar Sinhagad Road", lat: 18.477646, lon: 73.823708, busTimes: ["7:30 AM", "12:30 PM", "5:30 PM"] },
    { name: "Ganesh Park", lat: 18.475765, lon: 73.822838, busTimes: ["7:45 AM", "12:45 PM", "5:45 PM"] },
    { name: "Manikbaug", lat: 18.473245, lon: 73.82165, busTimes: ["8:00 AM", "1:00 PM", "6:00 PM"] },
    { name: "Indian Hume Pipe", lat: 18.470329, lon: 73.820517, busTimes: ["8:15 AM", "1:15 PM", "6:15 PM"] },
    { name: "Fun Time", lat: 18.469005, lon: 73.819846, busTimes: ["8:30 AM", "1:30 PM", "6:30 PM"] },
    { name: "Vadgaon BK Phata", lat: 18.467121, lon: 73.818242, busTimes: ["8:45 AM", "1:45 PM", "6:45 PM"] },
    { name: "Patil Colony", lat: 18.463137, lon: 73.815072, busTimes: ["9:00 AM", "2:00 PM", "7:00 PM"] },
    { name: "Dhayari Phata", lat: 18.460649, lon: 73.812741, busTimes: ["9:15 AM", "2:15 PM", "7:15 PM"] },
    { name: "Garmal", lat: 18.457447, lon: 73.811808, busTimes: ["9:30 AM", "2:30 PM", "7:30 PM"] },
    { name: "Raikar Vasti", lat: 18.453936, lon: 73.811613, busTimes: ["9:45 AM", "2:45 PM", "7:45 PM"] },
    { name: "Poultry Farm Dhayari", lat: 18.451875, lon: 73.811233, busTimes: ["10:00 AM", "3:00 PM", "8:00 PM"] },
    { name: "Ganeshnagar", lat: 18.450525, lon: 73.811049, busTimes: ["10:15 AM", "3:15 PM", "8:15 PM"] },
    { name: "Dhayarigaon", lat: 18.447547, lon: 73.810356, busTimes: ["10:30 AM", "3:30 PM", "8:30 PM"] },
    { name: "Sai Puram Chowk", lat: 18.446736, lon: 73.814666, busTimes: ["10:45 AM", "3:45 PM", "8:45 PM"] },
    { name: "Benkarvasti", lat: 18.443917, lon: 73.815741, busTimes: ["11:00 AM", "4:00 PM", "9:00 PM"] },
    { name: "Dhayareshwar Mandir", lat: 18.442297, lon: 73.812738, busTimes: ["11:15 AM", "4:15 PM", "9:15 PM"] },
    { name: "Dhayari Maruti Mandir", lat: 18.442561, lon: 73.809882, busTimes: ["11:30 AM", "4:30 PM", "9:30 PM"] },
    { name: "Mental Hospital", lat: 18.566421, lon: 73.878674, busTimes: ["11:45 AM", "4:45 PM", "9:45 PM"] },
    { name: "Phulenagar", lat: 18.559758, lon: 73.876389, busTimes: ["12:00 PM", "5:00 PM", "10:00 PM"] },
    { name: "Homegaurd", lat: 18.556110, lon: 73.875129, busTimes: ["12:15 PM", "5:15 PM", "10:15 PM"] },
    { name: "Swargate", lat: 18.498924, lon: 73.85855, busTimes: ["6:30 AM", "11:30 AM", "4:30 PM"] },
    { name: "Match Well Company", lat: 18.549643, lon: 73.918525, busTimes: ["6:45 AM", "11:45 AM", "4:45 PM"] },
    { name: "Sainikwadi", lat: 18.553731, lon: 73.916493, busTimes: ["7:00 AM", "12:00 PM", "5:00 PM"] },
    { name: "Vrundavan", lat: 18.554609, lon: 73.915238, busTimes: ["7:15 AM", "12:15 PM", "5:15 PM"] },
    { name: "Chinchwadgaon", lat: 18.627568, lon: 73.782086, busTimes: ["7:30 AM", "12:30 PM", "5:30 PM"] },
    { name: "Chaphekar Chowk", lat: 18.628397, lon: 73.780308, busTimes: ["7:45 AM", "12:45 PM", "5:45 PM"] },
    { name: "Walhekarwadi Corner", lat: 18.631118, lon: 73.777063, busTimes: ["8:00 AM", "1:00 PM", "6:00 PM"] },
    { name: "Birla Hospital", lat: 18.626773, lon: 73.775162, busTimes: ["8:15 AM", "1:15 PM", "6:15 PM"] },
    { name: "Dattanagar Chinchwad Road", lat: 18.623242, lon: 73.77437, busTimes: ["8:30 AM", "1:30 PM", "6:30 PM"] },
    { name: "Pudumjee Paper Mill", lat: 18.620555, lon: 73.771203, busTimes: ["8:45 AM", "1:45 PM", "6:45 PM"] },
    { name: "Thergaon Phata", lat: 18.616405, lon: 73.766224, busTimes: ["9:00 AM", "2:00 PM", "7:00 PM"] },
    { name: "Lakshmannagar", lat: 18.611483, lon: 73.768667, busTimes: ["9:15 AM", "2:15 PM", "7:15 PM"] },
    { name: "Racecourse", lat: 18.506499, lon: 73.890321, busTimes: ["9:30 AM", "2:30 PM", "7:30 PM"] },
    { name: "Bhairoba Nala Police Chowky", lat: 18.506935, lon: 73.896687, busTimes: ["9:45 AM", "2:45 PM", "7:45 PM"] },
    { name: "Fatimanagar", lat: 18.506704, lon: 73.899748, busTimes: ["10:00 AM", "3:00 PM", "8:00 PM"] },
    { name: "Kalubai Mandir Ramtekdi", lat: 18.506535, lon: 73.90651, busTimes: ["10:15 AM", "3:15 PM", "8:15 PM"] },
    { name: "Ramtekdi", lat: 18.506366, lon: 73.912285, busTimes: ["10:30 AM", "3:30 PM", "8:30 PM"] },
    { name: "Vaiduwadi", lat: 18.504201, lon: 73.921003, busTimes: ["10:45 AM", "3:45 PM", "8:45 PM"] },
    { name: "Satavwadi", lat: 18.49701, lon: 73.942955, busTimes: ["11:00 AM", "4:00 PM", "9:00 PM"] },
    { name: "Gondhalenagar", lat: 18.494793, lon: 73.94599, busTimes: ["11:15 AM", "4:15 PM", "9:15 PM"] },
    { name: "Tukaidarshan", lat: 18.491532, lon: 73.94905, busTimes: ["11:30 AM", "4:30 PM", "9:30 PM"] },
    { name: "IBM", lat: 18.489437, lon: 73.950599, busTimes: ["11:45 AM", "4:45 PM", "9:45 PM"] },
    { name: "Ganganagar", lat: 18.486572, lon: 73.952622, busTimes: ["12:00 PM", "5:00 PM", "10:00 PM"] },
    { name: "Bhekrainagar", lat: 18.484256, lon: 73.952662, busTimes: ["12:15 PM", "5:15 PM", "10:15 PM"] },
    { name: "Ramoshigate", lat: 18.509331, lon: 73.868327, busTimes: ["12:30 PM", "5:30 PM", "10:30 PM"] },
    { name: "Sonawne Hospital", lat: 18.505767, lon: 73.868594, busTimes: ["12:45 PM", "5:45 PM", "10:45 PM"] },
    { name: "Laxminarayan Talkies", lat: 18.497001, lon: 73.858161, busTimes: ["1:00 PM", "6:00 PM", "11:00 PM"] },
    { name: "Padmawati Power House", lat: 18.481484, lon: 73.857227, busTimes: ["6:00 AM", "12:00 PM", "5:00 PM"] },
    { name: "Deccan College", lat: 18.549986, lon: 73.871873, busTimes: ["7:00 AM", "1:00 PM", "6:00 PM"] },
    { name: "Kendriya Vidyalaya Sangamwadi", lat: 18.545414, lon: 73.876263, busTimes: ["8:00 AM", "2:00 PM", "7:00 PM"] },
    { name: "Sadalbaba Darga", lat: 18.544253, lon: 73.878097, busTimes: ["7:30 AM", "12:30 PM", "5:30 PM"] },
    { name: "Gharkul Vasahat Chikhali", lat: 18.669548, lon: 73.806357, busTimes: ["9:00 AM", "3:00 PM", "8:00 PM"] },
    { name: "Gharkul Corner", lat: 18.665655, lon: 73.805891, busTimes: ["9:15 AM", "3:15 PM", "8:15 PM"] },
    { name: "Sharadnagar", lat: 18.666238, lon: 73.799466, busTimes: ["9:30 AM", "3:30 PM", "8:30 PM"] },
    { name: "Krushnanagar Corner", lat: 18.666644, lon: 73.795881, busTimes: ["9:45 AM", "3:45 PM", "8:45 PM"] },
    { name: "Kasturi Market", lat: 18.664381, lon: 73.795240, busTimes: ["10:00 AM", "4:00 PM", "9:00 PM"] },
    { name: "Prashant Society", lat: 18.661744, lon: 73.794261, busTimes: ["10:15 AM", "4:15 PM", "9:15 PM"] },
    { name: "Thermax Company", lat: 18.660455, lon: 73.793426, busTimes: ["10:30 AM", "4:30 PM", "9:30 PM"] },
    { name: "Akurdi Khandoba Maal", lat: 18.650859, lon: 73.786159, busTimes: ["10:45 AM", "4:45 PM", "9:45 PM"] },
    { name: "Akurdi Chowk", lat: 18.649167, lon: 73.785260, busTimes: ["11:00 AM", "5:00 PM", "10:00 PM"] },
    { name: "Jai Ganesh Vision", lat: 18.647632, lon: 73.785088, busTimes: ["11:15 AM", "5:15 PM", "10:15 PM"] },
    { name: "Bhoirnagar", lat: 18.642696, lon: 73.783671, busTimes: ["11:30 AM", "5:30 PM", "10:30 PM"] },
    { name: "Indiranagar", lat: 18.641188, lon: 73.783319, busTimes: ["11:45 AM", "5:45 PM", "10:45 PM"] },
    { name: "Premlok Park", lat: 18.637232, lon: 73.782350, busTimes: ["12:00 PM", "6:00 PM", "11:00 PM"] },
    { name: "SKF", lat: 18.633816, lon: 73.781574, busTimes: ["12:15 PM", "6:15 PM", "11:15 PM"] },
    { name: "Lokmangal", lat: 18.629569, lon: 73.858570, busTimes: ["12:30 PM", "6:30 PM", "11:30 PM"] },
    { name: "Engineering College", lat: 18.529569, lon: 73.858570, busTimes: ["12:45 PM", "6:45 PM", "11:45 PM"] },
    { name: "RTO", lat: 18.529854, lon: 73.862700, busTimes: ["1:00 PM", "7:00 PM", "12:00 AM"] },
    { name: "Krushnanagar", lat: 18.667328, lon: 73.788400, busTimes: ["1:15 PM", "7:15 PM", "12:15 AM"] },
    { name: "Mhetrevasti", lat: 18.669711, lon: 73.793890, busTimes: ["1:30 PM", "7:30 PM", "12:30 AM"] },
    { name: "Morevasti", lat: 18.670079, lon: 73.796138, busTimes: ["1:45 PM", "7:45 PM", "12:45 AM"] },
    { name: "Sane Chowk", lat: 18.670287, lon: 73.798132, busTimes: ["2:00 PM", "8:00 PM", "1:00 AM"] },
    { name: "Ma Na Pa Shala Wakad", lat: 18.594454, lon: 73.773550, busTimes: ["2:15 PM", "8:15 PM", "1:15 AM"] },
    { name: "Nisarga Society", lat: 18.598999, lon: 73.774513, busTimes: ["2:30 PM", "8:30 PM", "1:30 AM"] },
    { name: "Shivraj Nagar", lat: 18.599592, lon: 73.780655, busTimes: ["2:45 PM", "8:45 PM", "1:45 AM"] },
    { name: "Sai Chowk Pimple Saudagar", lat: 18.593174, lon: 73.785916, busTimes: ["3:00 PM", "9:00 PM", "2:00 AM"] },
    { name: "Shivar Chowk", lat: 18.594933, lon: 73.788684, busTimes: ["3:15 PM", "9:15 PM", "2:15 AM"] },
    { name: "Kunal Icon", lat: 18.594145, lon: 73.791087, busTimes: ["3:30 PM", "9:30 PM", "2:30 AM"] },
    { name: "Roseland Society", lat: 18.593518, lon: 73.794725, busTimes: ["3:45 PM", "9:45 PM", "2:45 AM"] },
    { name: "Rose Icon", lat: 18.593191, lon: 73.798312, busTimes: ["4:00 PM", "10:00 PM", "3:00 AM"] },
    { name: "Kate Petrol Pump", lat: 18.592649, lon: 73.801894, busTimes: ["4:15 PM", "10:15 PM", "3:15 AM"] },
    { name: "Sukhvani Lawns", lat: 18.594199, lon: 73.802074, busTimes: ["4:30 PM", "10:30 PM", "3:30 AM"] },
    { name: "Govind Yashada Chowk", lat: 18.597069, lon: 73.802292, busTimes: ["4:45 PM", "10:45 PM", "3:45 AM"] },
    { name: "Kokane Chowk", lat: 18.597642, lon: 73.790316, busTimes: ["5:00 PM", "11:00 PM", "4:00 AM"] },
    { name: "Ganesh Mandir Rahatani", lat: 18.599879, lon: 73.792971, busTimes: ["5:15 PM", "11:15 PM", "4:15 AM"] },
    { name: "Rahatani Gaon", lat: 18.602650, lon: 73.795892, busTimes: ["5:30 PM", "11:30 PM", "4:30 AM"] },
    { name: "Mahadev Mandir Pimple Saudagar", lat: 18.602029, lon: 73.799867, busTimes: ["5:45 PM", "11:45 PM", "4:45 AM"] },
    { name: "Pimple Saudagar Pump", lat: 18.600693, lon: 73.802992, busTimes: ["6:00 PM", "12:00 AM", "5:00 AM"] },
    { name: "Kate Patil Chowk", lat: 18.599456, lon: 73.807442, busTimes: ["6:15 PM", "12:15 AM", "5:15 AM"] },
    { name: "Sudarshannagar", lat: 18.598219, lon: 73.812023, busTimes: ["6:30 PM", "12:30 AM", "5:30 AM"] },
    { name: "Bhairavnagar Pimplegurav", lat: 18.597092, lon: 73.814368, busTimes: ["6:45 PM", "12:45 AM", "5:45 AM"] },
    { name: "Srushti Chowk", lat: 18.596954, lon: 73.816975, busTimes: ["7:00 PM", "1:00 AM", "6:00 AM"] },
    { name: "Pimplegurav", lat: 18.592906, lon: 73.818933, busTimes: ["7:15 PM", "1:15 AM", "6:15 AM"] },
    { name: "Planet Millenium", lat: 18.593437, lon: 73.797840, busTimes: ["7:30 PM", "1:30 AM", "6:30 AM"] },
    { name: "Pimplegurav Ma Na Pa Shala", lat: 18.590783, lon: 73.816479, busTimes: ["7:45 PM", "1:45 AM", "6:45 AM"] },
    { name: "Sai Chowk Wakad Nasik Phata Road", lat: 18.593174, lon: 73.785916, busTimes: ["8:00 PM", "2:00 AM", "7:00 AM"] },
    { name: "Roseland Nisarga Nirmiti Society", lat: 18.596828, lon: 73.794239, busTimes: ["8:15 PM", "2:15 AM", "7:15 AM"] },
    { name: "Vishvashanti Colony PK Chowk", lat: 18.598100, lon: 73.799043, busTimes: ["8:30 PM", "2:30 AM", "7:30 AM"] },
    { name: "Javalkarnagar", lat: 18.600205, lon: 73.813137, busTimes: ["8:45 PM", "2:45 AM", "7:45 AM"] },
    { name: "Kalpataru Society", lat: 18.601904, lon: 73.816193, busTimes: ["9:00 PM", "3:00 AM", "8:00 AM"] },
    { name: "CIRT", lat: 18.614217, lon: 73.824469, busTimes: ["9:15 PM", "3:15 AM", "8:15 AM"] },
    { name: "Bhosari Police Station", lat: 18.618377, lon: 73.827130, busTimes: ["9:30 PM", "3:30 AM", "8:30 AM"] },
    { name: "MIDC Bhosari", lat: 18.620697, lon: 73.831086, busTimes: ["9:45 PM", "3:45 AM", "8:45 AM"] },
    { name: "Philips", lat: 18.620717, lon: 73.836538, busTimes: ["10:00 PM", "4:00 AM", "9:00 AM"] },
    { name: "Rahatnigaon", lat: 18.602650, lon: 73.795892, busTimes: ["10:15 PM", "4:15 AM", "9:15 AM"] },
    { name: "Ganesh Mandir Pimple Gaurav", lat: 18.599879, lon: 73.792971, busTimes: ["10:30 PM", "4:30 AM", "9:30 AM"] },
    { name: "Sawarkar Bhavan", lat: 18.522353, lon: 73.849593, busTimes: ["10:45 PM", "4:45 AM", "9:45 AM"] },
    { name: "Bajaj Auto", lat: 18.653881, lon: 73.782524, busTimes: ["11:00 PM", "5:00 AM", "10:00 AM"] },
    { name: "Ruston Company", lat: 18.648266, lon: 73.787188, busTimes: ["11:15 PM", "5:15 AM", "10:15 AM"] },
    { name: "Kalbhornagar", lat: 18.646869, lon: 73.788430, busTimes: ["11:30 PM", "5:30 AM", "10:30 AM"] },
    { name: "Jayashree Talkies", lat: 18.641912, lon: 73.792687, busTimes: ["11:45 PM", "5:45 AM", "10:45 AM"] },
    { name: "Chinchwad Station", lat: 18.638225, lon: 73.795849, busTimes: ["12:00 AM", "6:00 AM", "11:00 AM"] },
    { name: "Empire Estate", lat: 18.635373, lon: 73.798232, busTimes: ["12:15 AM", "6:15 AM", "11:15 AM"] },
    { name: "Finolex", lat: 18.630483, lon: 73.801762, busTimes: ["12:30 AM", "6:30 AM", "11:30 AM"] },
    { name: "Factory Road", lat: 18.564871, lon: 73.850433, busTimes: ["12:45 AM", "6:45 AM", "11:45 AM"] },
    { name: "Methodist Church", lat: 18.558482, lon: 73.854986, busTimes: ["1:00 AM", "7:00 AM", "12:00 PM"] },
    { name: "Holkar water works", lat: 18.556697, lon: 73.859787, busTimes: ["1:15 AM", "7:15 AM", "12:15 PM"] },
    { name: "Holkar water works", lat: 18.556697, lon: 73.859787, busTimes: ["7:00 AM", "2:00 PM", "6:00 PM"] },
    { name: "Holkar Pul Corner", lat: 18.552622, lon: 73.865206, busTimes: ["7:30 AM", "2:30 PM", "7:30 PM"] },
    { name: "Sapras Post", lat: 18.549973, lon: 73.86947, busTimes: ["8:00 AM", "3:00 PM", "8:00 PM"] },
    { name: "Yerawadagaon", lat: 18.545053, lon: 73.882978, busTimes: ["8:30 AM", "3:30 PM", "8:30 PM"] },
    { name: "Parvati Paytha", lat: 18.49918, lon: 73.852362, busTimes: ["9:00 AM", "4:00 PM", "9:00 PM"] },
    { name: "Hingne", lat: 18.480242, lon: 73.825336, busTimes: ["9:30 AM", "4:30 PM", "9:30 PM"] },
    { name: "Raikarvasti", lat: 18.453936, lon: 73.811613, busTimes: ["10:00 AM", "5:00 PM", "10:00 PM"] },
    { name: "Ganeshnagar Dhayari", lat: 18.450525, lon: 73.811049, busTimes: ["10:30 AM", "5:30 PM", "10:30 PM"] },
    { name: "Mohannagar Chinchwad", lat: 18.644417, lon: 73.796236, busTimes: ["11:00 AM", "6:00 PM", "11:00 PM"] },
    { name: "Mohanagar Corner", lat: 18.642233, lon: 73.797008, busTimes: ["11:30 AM", "6:30 PM", "11:30 PM"] },
    { name: "MIDC Pimpri", lat: 18.641193, lon: 73.79526, busTimes: ["12:00 PM", "7:00 PM", "12:00 AM"] },
    { name: "Lokmanya Hospital", lat: 18.636287, lon: 73.789121, busTimes: ["12:30 PM", "7:30 PM", "12:30 AM"] },
    { name: "More Prekshagruha", lat: 18.634162, lon: 73.787482, busTimes: ["1:00 PM", "8:00 PM", "1:00 AM"] },
    { name: "Elpro Company", lat: 18.632447, lon: 73.785068, busTimes: ["1:30 PM", "8:30 PM", "1:30 AM"] }

];

// Function to calculate the nearest bus stop
function findNearestBusStop(userLat, userLon, busStops) {
    let nearestStop = null;
    let minDistance = Infinity;

    busStops.forEach(stop => {
        const distance = Math.sqrt(
            Math.pow(stop.lat - userLat, 2) + Math.pow(stop.lon - userLon, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearestStop = stop;
        }
    });

    return nearestStop;
}

// Function to get user location and display route
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            // Center map to user's location
            map.setView([userLat, userLon], 15);

            // Add marker for user's location
            L.marker([userLat, userLon]).addTo(map)
                .bindPopup('Your Location')
                .openPopup();

            // Find the nearest bus stop
            const nearestStop = findNearestBusStop(userLat, userLon, busStops);

            if (nearestStop) {
                // Display route to nearest bus stop
                displayRoute(userLat, userLon, nearestStop);
            } else {
                alert('No nearby bus stops found.');
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to display the route using Leaflet Routing Machine
function displayRoute(userLat, userLon, nearestStop) {
    // Add routing control to display the route
    L.Routing.control({
        waypoints: [
            L.latLng(userLat, userLon),
            L.latLng(nearestStop.lat, nearestStop.lon)
        ],
        routeWhileDragging: false,
        lineOptions: {
            styles: [{ color: 'blue', weight: 4 }] // Blue color route
        }
    })
        .on('routesfound', function (e) {
            // Get the first route's summary
            const route = e.routes[0];
            const distance = (route.summary.totalDistance / 1000).toFixed(2); // Distance in km
            const time = Math.ceil(route.summary.totalTime / 60); // Time in minutes

            // Display route details
            const routeInfoHTML = `
                <h3>Route to Nearest Bus Stop</h3>
                <p><strong>Bus Stop:</strong> ${nearestStop.name}</p>
                <p><strong>Distance:</strong> ${distance} km</p>
                <p><strong>Estimated Time:</strong> ${time} minutes</p>
            `;
            document.getElementById('bus-info').innerHTML = routeInfoHTML;

            // Add bus timings to destination
            const destination = document.getElementById('destination').value;
            if (destination) {
                displayBusTimings(nearestStop, destination);
            }
        })
        .addTo(map);

    // Add marker for the nearest bus stop
    L.marker([nearestStop.lat, nearestStop.lon]).addTo(map)
        .bindPopup(nearestStop.name)
        .openPopup();
}

// Function to display bus timings to the destination
function displayBusTimings(nearestStop, destination) {
    // Placeholder logic to simulate bus timings to the destination
    let busInfoHTML = `<h3>Buses to ${destination}</h3>`;
    busInfoHTML += `<p>From: ${nearestStop.name}</p>`;
    busInfoHTML += `<ul>`;
    nearestStop.busTimes.forEach(time => {
        busInfoHTML += `<li>${time}</li>`;
    });
    busInfoHTML += `</ul>`;

    document.getElementById('bus-info').innerHTML += busInfoHTML;
}

// Handle "Select My Location" button click
document.getElementById('select-location').addEventListener('click', getUserLocation);

// Handle "Find Bus" button click
document.getElementById('search-bus').addEventListener('click', function () {
    const destination = document.getElementById('destination').value;
    if (!destination) {
        alert("Please enter a destination.");
        return;
    }

    // Trigger location selection to display route and bus timings
    getUserLocation();
});
