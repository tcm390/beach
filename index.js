import * as THREE from 'three';
import metaversefile from 'metaversefile';

const {useApp, usePhysics, useLoaders} = metaversefile;
const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, '$1');

export default () => {
  const app = useApp();
  const physics = usePhysics();
  
  {
    (async () => {
      const u = `${baseUrl}./assets/island4.glb`;
      const island = await new Promise((accept, reject) => {
        const {gltfLoader} = useLoaders();
        gltfLoader.load(u, accept, function onprogress() {}, reject);
          
      });
      island.scene.position.y = -7;
      physics.addGeometry(island.scene);
      
      app.add(island.scene);
      app.updateMatrixWorld();
    })();
  }
  return app;
};
