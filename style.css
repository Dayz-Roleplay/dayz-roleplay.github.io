:root {
  --blood: #9f1239;
  --dark: #0a0a0a;
}

* { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'Courier New', monospace;
  background: #0a0a0a url('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070') center/cover no-repeat fixed;
  color: #ddd;
  overflow-x: hidden;
}

.glitch {
  position: relative;
  animation: glitch 2s infinite;
}

@keyframes glitch {
  0% { text-shadow: 2px 2px #ff0000, -2px -2px #00ff00; }
  20% { text-shadow: -2px -2px #ff0000, 2px 2px #00ff00; }
  40% { text-shadow: 2px -2px #ff0000, -2px 2px #00ff00; }
  100% { text-shadow: 2px 2px #ff0000, -2px -2px #00ff00; }
}

/* Blood Dripping */
.drips {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.blood-drop {
  position: absolute;
  width: 8px;
  height: 20px;
  background: linear-gradient(#9f1239, #4c0519);
  border-radius: 50% 50% 50% 50%;
  animation: drip-fall linear infinite;
  box-shadow: 0 0 10px #9f1239;
}

@keyframes drip-fall {
  to { transform: translateY(120vh); }
}

/* Blood Overlay */
.blood-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(transparent, rgba(153, 27, 27, 0.1));
  pointer-events: none;
  z-index: 999;
  animation: bloodpulse 8s infinite;
}

@keyframes bloodpulse {
  0%,100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.btn-blood {
  background: #9f1239;
  color: white;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 3px solid #f87171;
  transition: all 0.3s;
}

.btn-blood:hover {
  background: #b91c1c;
  transform: scale(1.05);
  box-shadow: 0 0 30px #f87171;
}

.feature-card {
  background: rgba(153, 27, 27, 0.2);
  border: 2px solid #9f1239;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  transition: 0.3s;
}

.feature-card:hover {
  background: #9f1239;
  color: black;
  transform: translateY(-10px);
}

.rule {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #450a0a;
}
