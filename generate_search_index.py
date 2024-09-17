import os
import json
from bs4 import BeautifulSoup

# Correct path to your main directory
directory = r'D:\Studentcare\AU-Student-Care'

# List to hold the data for each page
pages_data = []

# Walk through all directories and files
for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith('.html'):
            filepath = os.path.join(root, filename)

            # Open and parse the HTML file
            with open(filepath, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')

                # Get the title of the page
                title = soup.title.string if soup.title else 'No title'

                # Get the meta description if available
                meta_description = soup.find('meta', attrs={'name': 'description'})
                content = meta_description['content'] if meta_description else 'No description'

                # Add to the list
                pages_data.append({
                    'title': title,
                    'url': filepath.replace(directory, ''),  # Relative path for URLs
                    'content': content
                })

# Write the list to a JSON file
with open('search-data.json', 'w', encoding='utf-8') as json_file:
    json.dump(pages_data, json_file, ensure_ascii=False, indent=4)

print(f'Search data generated for {len(pages_data)} pages!')
