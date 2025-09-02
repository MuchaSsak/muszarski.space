function Lighting() {
  return (
    <>
      <hemisphereLight args={[0xffffbb, 0x080820, 1]} />
      <directionalLight
        args={[0xffbb00, 1]}
        target-position={[0, 0, -100]}
        position={[0, 0, 1]}
      />
    </>
  );
}

export default Lighting;
