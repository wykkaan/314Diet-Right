// src\app\api\recipes\route.js
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Missing auth token' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } }
  });

  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) throw error;

    // Fetch user's recipes
    const { data: recipes, error: recipesError } = await supabase
      .from('recipes')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (recipesError) throw recipesError;

    return NextResponse.json(recipes || []);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json({ error: 'Failed to fetch recipes', details: error.message }, { status: 500 });
  }
}

export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Missing auth token' }, { status: 401 });
    }
  
    const token = authHeader.split(' ')[1];
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } }
    });
  
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
  
      if (error) throw error;
  
      const { name, ingredients, instructions } = await request.json();
  
      // Validate input
      if (!name || !ingredients || !instructions) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
  
      // Insert new recipe
      const { data, error: insertError } = await supabase
        .from('recipes')
        .insert({
          user_id: user.id,
          name,
          ingredients,
          instructions
        })
        .select()
        .single();
  
      if (insertError) throw insertError;
  
      return NextResponse.json(data);
    } catch (error) {
      console.error('Error creating recipe:', error);
      return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
    }
  }