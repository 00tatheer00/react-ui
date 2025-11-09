import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, TextField, Button, Avatar } from '@mui/material';

export default function Profile() {
  // Profile uses useState for editable name and a small local progress
  const [name, setName] = useState('Student');
  const [editing, setEditing] = useState(false);
  const [progress, setProgress] = useState(0); // simple numeric progress

  return (
    <Container maxWidth="md" className="py-8">
      <div className="flex items-center gap-6 mb-6">
        <Avatar sx={{ width: 84, height: 84, bgcolor: 'primary.main' }}>{(name || 'S')[0]}</Avatar>
        <div>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>{name}</Typography>
          <Typography className="text-slate-600">Learner • {progress}% progress</Typography>
        </div>
      </div>

      <Card>
        <CardContent className="space-y-4">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Edit Profile</Typography>
          {editing ? (
            <div className="flex gap-3 flex-col md:flex-row items-start">
              <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
              <Button onClick={() => setEditing(false)} variant="contained">Save</Button>
              <Button onClick={() => { setName('Student'); setEditing(false); }} variant="outlined">Reset</Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button onClick={() => setEditing(true)} variant="contained">Edit Name</Button>
              <Button onClick={() => setProgress(p => Math.min(100, p + 10))} variant="outlined">+10% Progress</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}