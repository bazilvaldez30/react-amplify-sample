import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Grid, Heading, Button } from '@aws-amplify/ui-react';
import { Form } from 'react-formio';
import "@aws-amplify/ui-react/styles.css";

function App({ signOut }) {
  return (
    
      <>
        <h1>QWEQ</h1>
        <Heading level={3}>Create Workout</Heading>
        <Form 
          src="https://zvzuragyakvysse.form.io/createworkout"
          // onSubmit={createWorkout}
          // onChange={(e) => onChange1(e)}
        />
        <Button onClick={signOut}>Sign Out</Button>
      </>
    
  );
}

export default withAuthenticator(App);
