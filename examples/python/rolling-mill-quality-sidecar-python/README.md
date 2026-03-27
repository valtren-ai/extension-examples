# rolling-mill-quality-sidecar-python

Manufacturing-focused Python sidecar for rolling-mill quality scoring.

## What it demonstrates

- `/health` for runtime checks
- `/quality/score` for steel-coil or plate quality scoring
- a practical Python starting point for plant quality or process-engineering teams

## Example use case

A plant wants to evaluate coil quality drift using width variance, thickness variance, and defect count before escalating to a quality manager.

## Local run

```bash
cd examples/python/rolling-mill-quality-sidecar-python
pip install -r requirements.txt
python app.py
```
