#!/bin/bash

# Rama donde se harán los commits
branch="main"  # Cámbiala si tu rama se llama diferente

# Commits del 05 al 31 de mayo de 2025
for day in $(seq -f "%02g" 5 31); do
  date="2025-05-${day} 12:00:00"
  git commit --allow-empty -m "Commit del 2025-05-${day}" --date="${date}"
done

# Commits del 01 al 13 de junio de 2025
for day in $(seq -f "%02g" 1 13); do
  date="2025-06-${day} 12:00:00"
  git commit --allow-empty -m "Commit del 2025-06-${day}" --date="${date}"
done

# Empujar al repositorio remoto
git push origin $branch  # Evitar --force a menos que sea necesario

echo "Commits realizados del 5 de mayo al 13 de junio de 2025."
