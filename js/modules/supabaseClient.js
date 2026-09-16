/**
 * Módulo de Conexão com o Supabase (Vanilla JS + ES Modules)
 * Conecta o frontend à base de dados do Guaramo Arte via cliente oficial.
 */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://mryliokxkqyyvvicuslg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yeWxpb2t4a3F5eXZ2aWN1c2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1ODIxNTcsImV4cCI6MjEwNTE1ODE1N30.vlr_A6NTT6ABbSkS2qLwX2iCOw-X-dRpwEnqmnifpU4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
