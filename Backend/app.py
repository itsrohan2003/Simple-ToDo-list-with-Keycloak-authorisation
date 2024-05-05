from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/add_todo', methods=['POST'])
def add_todo():
    try:
        # Parse JSON data from the request body
        data = request.get_json()
        title = data.get('title')
        description = data.get('description')
        time = data.get('time')

        # Format the received todo data for better printing
        formatted_todo = f"""
        Received Todo:
        Title: {title}
        Description: {description}
        Time: {time}
        """

        # Print the formatted todo data to the console
        print(formatted_todo)

        # Respond with a success message
        return jsonify({'message': 'Todo added successfully'}), 200
    except Exception as e:
        # Respond with an error message if an exception occurs
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
