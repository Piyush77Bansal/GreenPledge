import ee
import folium
import geemap
import webbrowser

# Autenticar e inicializar o Google Earth Engine
ee.Authenticate()
ee.Initialize(project='ee-silvacristiano0508')  # Insira o ID do seu projeto

# Definir a região de interesse (Portugal)
portugal = ee.Geometry.Polygon([
    [[-9.5, 42.1], [-6.2, 42.1], [-6.2, 36.8], [-9.5, 36.8], [-9.5, 42.1]]
])

# Carregar imagens do Sentinel-2 (mais recentes disponíveis)
sentinel = ee.ImageCollection("COPERNICUS/S2") \
    .filterBounds(portugal) \
    .filterDate('2024-01-01', '2024-12-31') \
    .sort('system:time_start', False) \
    .first()

# Calcular NDVI (Índice de Vegetação Normalizado)
ndvi = sentinel.normalizedDifference(['B8', 'B4']).rename('NDVI')

# Identificar áreas desflorestadas (NDVI < 0.2)
deforested = ndvi.lt(0.2).selfMask()

# Criar um mapa interativo centrado em Portugal
m = geemap.Map(center=[39.5, -8.0], zoom=6)

# Adicionar camada NDVI
ndvi_params = {'min': 0, 'max': 1, 'palette': ['red', 'yellow', 'green']}
m.addLayer(ndvi, ndvi_params, 'NDVI')

# Adicionar áreas desflorestadas em vermelho
m.addLayer(deforested, {'palette': 'red'}, 'Deforested Areas')

# Adicionar controle de camadas
m.addLayerControl()

# Salvar o mapa em um arquivo HTML
map_path = "map_portugal.html"
m.save(map_path)

# Abrir o mapa no Google Chrome
chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe %s"
webbrowser.get(chrome_path).open(map_path)
