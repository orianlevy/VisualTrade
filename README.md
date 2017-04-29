#Instructions:
1. Open CMD
2. cd path\to\VisualTrade
3. npm install
4. npm run prod
5. Browse to VisualTrade\dist
6. Double click index.html


#Notes:
1. Tested with resolution 1920x1080
2. The brown dot is not always correcly align with y axis


#Flow
1. Area is a component that know how to render d3 area charts
2. App is the main component that initializing the configuration for Area component
3. The walk function in App.js is generating random x,y number according to random walk algorithm and updating the state of out date
4. The walk function have setTimeout of 100ms - so it runs every 100ms with new x,y points
5. In the App component when the state of data is updated, we render the Area component with the new x,y and so on
6. the append_result function in App component is appending the brown dot to our d3 chart with the corresponding x,y
7. The initial state of the width is 0, and each time the walk function is running it checks if the current state of the width is less then the half of the map,
	If yes, it add 1 to the width. If we reached the half of the map - we wont expand the width of the chart anymore.