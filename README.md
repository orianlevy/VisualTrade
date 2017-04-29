#Instructions:
1. Browse to VisualTrade folder
2. Open CMD
3. npm install
4. npm run prod
5. Browse to VisualTrade\dist
6. Double click index.html


#Notes:
1. Tested with resolution 1920x1080
2. The brown dot is not always correcly align with y axis
3. I wasnt able to create the first part where the line is getting to the middle (only the brown dot is moving but the graph dosent)


#Flow
1. Area is a component that know how to render d3 area charts
2. App is the main component that initializing the configuration for Area component
3. The walk function in App.js is generating random x,y number according to random walk algorithm and updating the state of out date
4. The walk function have setTimeout of 100ms - so it runs every 100ms with new x,y points
5. In the App component when the state of data is updated, we render the Area component with the new x,y and so on
6. the append_result function in App component is appending the brown dot to our d3 chart with the corresponding x,y