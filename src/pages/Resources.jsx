import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material';

const initialResources = [
  { id: 1, title: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { id: 2, title: 'React Official Docs', url: 'https://reactjs.org' },
  { id: 3, title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org' }
];

export default function Resources() {
  // useState for resources and for adding a custom resource
  const [resources, setResources] = useState(initialResources);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const addResource = () => {
    if (!title.trim() || !url.trim()) return;
    setResources(prev => [{ id: Date.now(), title, url }, ...prev]);
    setTitle(''); setUrl('');
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" sx={{ fontWeight: 800 }}>Resources</Typography>
      <Typography className="text-slate-600 mb-4">Handy links and recommended reading for practice.</Typography>

      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row gap-3">
          <TextField label="Resource title" value={title} onChange={e => setTitle(e.target.value)} size="small" fullWidth />
          <TextField label="URL" value={url} onChange={e => setUrl(e.target.value)} size="small" fullWidth />
          <Button onClick={addResource} variant="contained">Add</Button>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {resources.map(r => (
          <Grid item xs={12} md={6} key={r.id}>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{r.title}</Typography>
                    <a href={r.url} target="_blank" rel="noreferrer" className="text-primary text-sm">{r.url}</a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="small" variant="outlined" href={r.url} target="_blank">Open</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}