package com.dh.ClinicaOdontologica.controller;

import com.dh.ClinicaOdontologica.entity.Paciente;
import com.dh.ClinicaOdontologica.exception.ResourceNotFounfException;
import com.dh.ClinicaOdontologica.service.IPacienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteController {

    private IPacienteService pacienteService;

    public PacienteController(IPacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @PostMapping
    public ResponseEntity<Paciente> guardar(@RequestBody Paciente paciente) {
        return ResponseEntity.ok(pacienteService.guardar(paciente));
    }

    @GetMapping
    public ResponseEntity<List<Paciente>> listarTodos(){
        return ResponseEntity.ok(pacienteService.listarTodos());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminarPaciente(@PathVariable Long id) throws ResourceNotFounfException {
        pacienteService.eliminar(id);
        return new ResponseEntity<>("Paciente eliminado correctamente", HttpStatus.OK);
    }
}