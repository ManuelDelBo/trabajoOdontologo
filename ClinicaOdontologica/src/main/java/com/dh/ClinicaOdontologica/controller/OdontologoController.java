package com.dh.ClinicaOdontologica.controller;

import com.dh.ClinicaOdontologica.entity.Odontologo;
import com.dh.ClinicaOdontologica.exception.ResourceNotFounfException;
import com.dh.ClinicaOdontologica.service.IOdontologoService;
import com.dh.ClinicaOdontologica.service.implementation.OdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {
    private IOdontologoService odontologoService;

    @Autowired
    public OdontologoController(OdontologoService odontologoService){
        this.odontologoService = odontologoService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Odontologo> buscarPorId(@PathVariable Long id) {

        return ResponseEntity.ok(odontologoService.buscarPorId(id));
    }
    @PostMapping
    public ResponseEntity<Odontologo> guardar(@RequestBody Odontologo odontologo) {
        return ResponseEntity.ok(odontologoService.guardar(odontologo));
    }

    @GetMapping
    public ResponseEntity<List<Odontologo>> listarTodos() {
        return ResponseEntity.ok(odontologoService.listarTodos());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @RequestBody Odontologo odontologo) {
        ResponseEntity<?> response;
        Odontologo odontologoExistente = odontologoService.buscarPorId(id);
        if(odontologoExistente != null) {
            odontologo.setId(id);
            odontologoService.actualizar(odontologo);
            response = ResponseEntity.ok("Odontologo actualizado. Nro ID: " + id);
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el Odontólogo con ID: " + id);
        }
        return response;
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminarOdontologo(@PathVariable Long id) throws ResourceNotFounfException {
        odontologoService.eliminar(id);
        return new ResponseEntity<>("Odontolodo eliminado correctamente", HttpStatus.OK);
    }

    @GetMapping("/matricula/{matricula}")
    public ResponseEntity<Odontologo> findByMatricula(@PathVariable String matricula) throws ResourceNotFounfException {
        Optional<Odontologo> odontologoOptional= odontologoService.findByMatricula(matricula);
        if (odontologoOptional.isPresent()) {
            return ResponseEntity.ok(odontologoOptional.get());
        }else {
            throw new ResourceNotFounfException("No se encontrò el odontologo con matricula nro: " + matricula);
        }
    }
}
