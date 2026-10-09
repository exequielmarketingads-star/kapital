const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample API for pre-loaded templates
app.get('/api/templates', (req, res) => {
  const templates = [
    {
      id: 'fire',
      title: 'Plantilla Modelo FIRE (Retiro Temprano)',
      price: '$4.99',
      category: 'Inversión & Retiro',
      description: 'Calculadora de tasa de ahorro agresiva, regla del 4% y proyección matemática de libertad financiera.',
      features: ['Simulador de interés compuesto', 'Matriz de costos de vida pasivos', 'Proyección a 5, 10 y 20 años']
    },
    {
      id: '50-30-20',
      title: 'Plantilla Sistema de Sobres 50/30/20',
      price: '$2.99',
      category: 'Presupuesto Básico',
      description: 'División automática de ingresos: 50% Necesidades, 30% Deseos y 20% Ahorro / Pago de Deudas.',
      features: ['Categorización automática', 'Alertas de desvío', 'Resumen mensual listo para imprimir']
    },
    {
      id: 'debt-crusher',
      title: 'Plantilla Deuda Cero (Avalancha & Bola de Nieve)',
      price: '$3.99',
      category: 'Desendeudamiento',
      description: 'Cronograma automatizado de amortización con comparación en vivo entre costo por interés vs. rapidez psicológica.',
      features: ['Comparador Avalancha vs Bola de Nieve', 'Calendario de pagos', 'Ahorro proyectado de intereses']
    },
    {
      id: 'family-budget',
      title: 'Plantilla Presupuesto Familiar Multifuente',
      price: '$5.99',
      category: 'Familia & Hogar',
      description: 'Consolidación de múltiples ingresos familiares, control de servicios del hogar y fondo de contingencia infantil.',
      features: ['División proporcional de gastos comunes', 'Gastos fijos anualizados', 'Fondos de vacaciones']
    }
  ];
  res.json(templates);
});

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[KAPITAL] Servidor activo en http://localhost:${PORT}`);
});
