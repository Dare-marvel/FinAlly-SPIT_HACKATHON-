from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
model = pickle.load(open('investment_model.pkl', 'rb'))
CORS(app)

@app.route('/predict', methods=["POST"])
def predict():
    data = request.get_json()  # Get JSON data from the request
    investment_amount = int(data['Investment_Amount'])
    spending_amount = int(data['Spending_Amount'])
    risk_tolerance = data['Risk_Tolerance']
    
    # Convert Risk Tolerance to numerical format if needed
    risk_map = {'High': 0, 'Medium': 2, 'Low': 1}
    risk_tolerance_num = risk_map.get(risk_tolerance, 1)  # Default to 'Medium' if not found
    
    # Prepare features for prediction
    features = [investment_amount, risk_tolerance_num, spending_amount]
    features_final = np.array(features).reshape(1, -1)
    
    prediction = model.predict(features_final)
    
    # Instead of rendering a template, return JSON response
    return jsonify(prediction_text='Recommended Investment Type: {}'.format(prediction[0]))

if __name__ == '__main__':
    app.run(debug=True)
