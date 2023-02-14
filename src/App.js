import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { Form } from 'react-formio';
import "@aws-amplify/ui-react/styles.css";

import { API } from "aws-amplify";
import { useState, useEffect } from 'react';

import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Grid,
  withAuthenticator,
} from "@aws-amplify/ui-react";
// import { listWorkouts } from "./graphql/queries";
// import {
//   createWorkouts as createWorkoutsMutation,
//   deleteWorkouts as deleteWorkoutsMutation,
// } from "./graphql/mutations";

  // const App = ({ signOut }) => {
  // const [workoutss, setWorkoutss] = useState([]);
  // const [workawt, setWorkawts] = useState([]);
  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listWorkouts });
  //   const workoutssFromAPI = apiData.data.listWorkouts.items;
  //   setWorkoutss(workoutssFromAPI);
  //   setWorkawts(workoutssFromAPI);
  //   console.log(workoutssFromAPI);
  // }

  // async function createNote(event) {
  //   event.preventDefault()
  //   const form = new FormData(event.target);
  //   const data = {
  //     title: form.get("title"),
  //     load: Number(form.get("load")),
  //     reps: Number(form.get("reps"))
  //   };
  //   await API.graphql({
  //     query: createWorkoutsMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id }) {
  //   const newNotes = workoutss.filter((note) => note.id !== id);
  //   setWorkoutss(newNotes);
  //   await API.graphql({
  //     query: deleteWorkoutsMutation,
  //     variables: { input: { id } },
  //   });
  // }

  // return (
  //   <View className="App">
  //     <Heading level={1}>My Workout App</Heading>
  //     <View as="form" margin="3rem 0" onSubmit={createNote}>
  //       <Flex direction="row" justifyContent="center">
  //         <TextField
  //           name="title"
  //           placeholder="Title"
  //           label="Title"
  //           labelHidden
  //           variation="quiet"
  //           required
  //         />
  //         <TextField
  //           name="load"
  //           placeholder="Load"
  //           label="Load"
  //           labelHidden
  //           variation="quiet"
  //           required
  //         />
  //         <TextField
  //           name="reps"
  //           placeholder="Reps"
  //           label="Reps"
  //           labelHidden
  //           variation="quiet"
  //           required
  //         />
          
  //         <Button type="submit" variation="primary">
  //           Create Note
  //         </Button>
  //       </Flex>
  //     </View>
  //     {/* <Form 
  //         src="https://zvzuragyakvysse.form.io/createworkout"
  //         onSubmit={createNote}
  //         onChange={(e) => setWorkawts(e.data)}
  //       /> */}
  //     <Heading level={2}>Current Notes</Heading>
  //     <View margin="3rem 0">
  //       {workoutss.map((workout) => (
  //         <Flex
  //           key={workout.id || workout.title}
  //           direction="row"
  //           justifyContent="center"
  //           alignItems="center"
  //         >
  //           <Text as="strong" fontWeight={700}>
  //             {workout.title}
  //           </Text>
  //           <Text as="span">{workout.load}</Text>
  //           <Text as="span">{workout.reps}</Text>
  //           <Button variation="link" onClick={() => deleteNote(workout)}>
  //             Delete workout
  //           </Button>
  //         </Flex>
  //       ))}
  //     </View>
  //     <Button onClick={signOut}>Sign Out</Button>
  //   </View>
  // );
//   <h1>123</h1>
// };

// export default withAuthenticator(App);



function App() {
  return (
    
      <>
        <h1>QWEQ</h1>
        <Heading level={3}>Create Workout</Heading>
        <Form 
          src="https://zvzuragyakvysse.form.io/createworkout"
          // onSubmit={createWorkout}
          // onChange={(e) => onChange1(e)}
        />
        <Button>Sign Out</Button>
      </>
    
  );
}

export default App;
